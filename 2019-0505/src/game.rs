pub mod event;
pub mod number;
pub mod player;
pub mod scene;
pub mod shape;
pub mod text;
pub mod window;

use wasm_bindgen::prelude::JsValue;

use event::Event;
use scene::{Scene, SceneBase, Title};
use window::Window;
use shape::{Point, Rect};

pub struct Game {
    ctx: web_sys::CanvasRenderingContext2d,
    width: f64,
    height: f64,
    scene: Scene,
}

impl Game {
    fn new(window: &Window) -> Game {
        let width = window.canvas.width() as f64;
        let height = window.canvas.height() as f64;
        let mut rect = Rect::new(Point::new(0.0, 0.0), width, height, "white");
        Game {
            ctx: window.context.clone(),
            width: width,
            height: height,
            scene: Scene::Title(Title::new(window.location.clone(), rect)),
        }
    }

    fn clear(&self) {
        self.ctx.clear_rect(0.0, 0.0, self.width, self.height);
    }

    fn render(&self) {
        self.clear();
        self.scene.draw(&self.ctx);
    }

    fn update(&mut self, events: &Vec<Event>) {
        if let Some(next_scene) = self.scene.update(events) {
            self.scene = next_scene;
        }
    }
}

pub fn run() -> Result<(), JsValue> {
    let mut window = Window::new();
    let mut game = Game::new(&window);

    window.render_loop(move |events| {
        game.update(&events);
        game.render();
    });
    Ok(())
}
