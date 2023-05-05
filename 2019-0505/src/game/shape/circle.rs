use std::f64;

use super::{get_color, Point};

use wasm_bindgen::prelude::JsValue;

pub struct Circle {
    pub pos: Point,
    pub radius: f64,
    pub color: JsValue,
}

impl Circle {
    pub fn new(pos: Point, radius: f64, color: &str) -> Circle {
        Circle {
            pos: pos,
            radius: radius,
            color: get_color(color),
        }
    }

    pub fn draw_fill(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        ctx.begin_path();
        ctx.set_fill_style(&self.color);
        ctx.arc(
            self.pos.x,
            self.pos.y,
            self.radius,
            0.0,
            f64::consts::PI * 2.0,
        )
        .unwrap();
        ctx.fill();
    }

    pub fn set_color(&mut self, color: &str) {
        self.color = get_color(color);
    }
}

use super::IsPointInternal;

impl IsPointInternal for Circle {
    fn is_point_internal(&self, pos: &Point) -> bool {
        self.pos.dist(pos) <= self.radius
    }
}
