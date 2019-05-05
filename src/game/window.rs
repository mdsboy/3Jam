use std::f64;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

use crate::game::event::{Event, MouseButton, State};

use std::cell::RefCell;
use std::rc::Rc;

fn window() -> web_sys::Window {
    web_sys::window().expect("no global `window` exists")
}

fn request_animation_frame(f: &Closure<FnMut()>) {
    window()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}

pub struct Window {
    pub canvas: web_sys::HtmlCanvasElement,
    pub context: web_sys::CanvasRenderingContext2d,
    pub location: web_sys::Location,
}

impl Window {
    pub fn new() -> Window {
        let window = web_sys::window().unwrap();
        let document = window.document().unwrap();
        let canvas = document.get_element_by_id("canvas").unwrap();
        let canvas: web_sys::HtmlCanvasElement = canvas
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();
        Window {
            canvas: canvas,
            context: context,
            location: window.location(),
        }
    }

    pub fn render_loop<F: 'static>(&mut self, mut callback: F)
    where
        F: FnMut(&Vec<Event>),
    {
        let f = Rc::new(RefCell::new(None));
        let g = f.clone();

        let events = Rc::new(RefCell::new(Vec::new()));

        self.add_mousedown_event_listener(events.clone());
        self.add_key_down_event_listener(events.clone());
        self.add_key_up_event_listener(events.clone());

        *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
            callback(&(*events).borrow());
            &(*events).borrow_mut().clear();

            request_animation_frame(f.borrow().as_ref().unwrap());
        }) as Box<FnMut()>));

        request_animation_frame(g.borrow().as_ref().unwrap());
    }

    fn add_mousedown_event_listener(&self, events: Rc<RefCell<Vec<Event>>>) {
        let closure = Closure::wrap(Box::new(move |event: web_sys::MouseEvent| {
            let button = match event.button() {
                0 => Some(MouseButton::Left),
                1 => Some(MouseButton::Middle),
                2 => Some(MouseButton::Right),
                _ => None,
            };
            return if let Some(b) = button {
                (*events).borrow_mut().push(Event::MouseClick {
                    state: State::Pressed,
                    button: b,
                    position: (event.offset_x() as f64, event.offset_y() as f64),
                });
            };
        }) as Box<dyn FnMut(_)>);
        self.canvas
            .add_event_listener_with_callback("mousedown", closure.as_ref().unchecked_ref())
            .unwrap();
        closure.forget();
    }

    fn add_key_down_event_listener(&self, events: Rc<RefCell<Vec<Event>>>) {
        let closure = Closure::wrap(Box::new(move |event: web_sys::KeyboardEvent| {
            if !event.default_prevented() {
                (*events).borrow_mut().push(Event::Key {
                    state: State::Pressed,
                    kind: map_key_code(event.code()),
                });
                event.prevent_default();
            }
        }) as Box<dyn FnMut(_)>);
        window().add_event_listener_with_callback("keydown", closure.as_ref().unchecked_ref());
        closure.forget();
    }

    fn add_key_up_event_listener(&self, events: Rc<RefCell<Vec<Event>>>) {
        let closure = Closure::wrap(Box::new(move |event: web_sys::KeyboardEvent| {
            if !event.default_prevented() {
                (*events).borrow_mut().push(Event::Key {
                    state: State::Released,
                    kind: map_key_code(event.code()),
                });
                event.prevent_default();
            }
        }) as Box<dyn FnMut(_)>);
        window().add_event_listener_with_callback("keyup", closure.as_ref().unchecked_ref());
        closure.forget();
    }
}

fn map_key_code(code: String) -> String {
    code.trim_start_matches("Key").to_string()
}
