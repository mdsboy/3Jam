use super::{get_color, Point};

use wasm_bindgen::prelude::JsValue;

#[derive(Clone)]
pub struct Rect {
    pub pos: Point,
    pub width: f64,
    pub height: f64,
    pub color: JsValue,
}

impl Rect {
    pub fn new(pos: Point, width: f64, height: f64, color: &str) -> Rect {
        Rect {
            pos: pos,
            width: width,
            height: height,
            color: get_color(color),
        }
    }

    pub fn draw_fill(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        ctx.begin_path();
        ctx.set_fill_style(&self.color);
        ctx.fill_rect(self.pos.x, self.pos.y, self.width, self.height);
        ctx.fill();
    }

    pub fn draw_stroke(&self, ctx: &web_sys::CanvasRenderingContext2d, linewidth: f64) {
        ctx.begin_path();
        ctx.set_line_width(linewidth);
        ctx.set_stroke_style(&self.color);
        ctx.stroke_rect(self.pos.x, self.pos.y, self.width, self.height);
        ctx.fill();
    }

    pub fn set_color(&mut self, color: &str) {
        self.color = get_color(color);
    }

    pub fn get_center(&self) -> Point {
        self.pos + Point::new(self.width / 2.0, self.height / 2.0)
    }
}

use super::{between, IsPointInternal};

impl IsPointInternal for Rect {
    fn is_point_internal(&self, pos: &Point) -> bool {
        between(self.pos.x, pos.x, self.width) && between(self.pos.y, pos.y, self.height)
    }
}
