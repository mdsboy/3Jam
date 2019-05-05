pub mod end;
pub mod play;
pub mod title;

pub use end::End;
pub use play::Play;
pub use title::Title;

use super::event::Event;

pub enum Scene {
    Title(Title),
    Play(Play),
    End(End),
}

pub trait SceneBase {
    fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d);

    fn update(&mut self, events: &Vec<Event>) -> Option<Scene>;
}

impl SceneBase for Scene {
    fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        match self {
            Scene::Title(x) => x.draw(ctx),
            Scene::Play(x) => x.draw(ctx),
            Scene::End(x) => x.draw(ctx),
        }
    }

    fn update(&mut self, events: &Vec<Event>) -> Option<Scene> {
        match self {
            Scene::Title(x) => x.update(events),
            Scene::Play(x) => x.update(events),
            Scene::End(x) => x.update(events),
        }
    }
}
