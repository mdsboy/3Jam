use super::super::event::{Event, State};
use super::super::scene::Scene;
use super::super::shape::{Point, Rect};
use super::super::text::draw_text;
use super::Play;

pub struct Title {
    location: web_sys::Location,
    window: Rect
}

impl Title {
    pub fn new(location: web_sys::Location, window: Rect) -> Title {
        Title {
            location: location,
            window: window,
        }
    }

    pub fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        self.window.draw_stroke(ctx, 5.0);

        draw_text(
            ctx,
            "0和ゲーム",
            Point::new(180.0, 450.0),
            "180px 'ＭＳ Ｐゴシック'",
            "black",
        );
    }

    pub fn update(&mut self, events: &Vec<Event>) -> Option<Scene> {
        self.window.set_color("black");

        for event in events {
            match event {
                Event::Key { state, kind } => {
                    if *state == State::Pressed {
                        match kind.as_str() {
                            "Z" => {
                                return Some(Scene::Play(Play::new(self.location.clone(), self.window.clone(), 1)));
                            }
                            _ => {}
                        }
                    }
                }
                _ => {}
            }
        }
        None
    }
}
