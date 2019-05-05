use super::super::event::{Event, State};
use super::super::scene::Scene;
use super::super::shape::{Point, Rect};
use super::super::text::draw_text;
use super::Title;

pub struct End {
    score: usize,
    location: web_sys::Location,
    window: Rect,
}

impl End {
    pub fn new(location: web_sys::Location, window: Rect, score: usize) -> End {
        End {
            score: score,
            location: location,
            window: window,
        }
    }

    pub fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        draw_text(
            ctx,
            "End",
            Point::new(100.0, 100.0),
            "30px 'ＭＳ Ｐゴシック'",
            "black",
        );
    }

    pub fn update(&self, events: &Vec<Event>) -> Option<Scene> {
        for event in events {
            match event {
                Event::Key { state, kind } => {
                    if *state == State::Pressed {
                        match kind.as_str() {
                            "Z" => {
                                return Some(Scene::Title(Title::new(self.location.clone(), self.window.clone())));
                            }
                            //"T" => self.tweet(),
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
