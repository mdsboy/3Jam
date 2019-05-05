use super::shape::{Circle, Point, Rect};

pub struct Player {
    pub rect: Circle,
    pub up: bool,
    pub down: bool,
    pub left: bool,
    pub right: bool,
}

impl Player {
    pub fn new(pos: Point) -> Player {
        let width = 100.0;
        let height = 100.0;
        Player {
            //rect: Rect::new(pos, height, width, "red"),
            rect: Circle::new(pos, 100.0, "red"),
            up: false,
            down: false,
            left: false,
            right: false,
        }
    }

    pub fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        self.rect.draw_fill(ctx);
    }

    pub fn update(&mut self) {
        if self.left {
            self.rect.pos.x -= 10.0;
        }
        if self.right {
            self.rect.pos.x += 10.0;
        }
        if self.up {
            self.rect.pos.y -= 10.0;
        }
        if self.down {
            self.rect.pos.y += 10.0;
        }
    }
}
