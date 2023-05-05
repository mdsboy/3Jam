pub mod circle;
pub mod point;
pub mod rect;

pub use circle::Circle;
pub use point::{between, Point};
pub use rect::Rect;

use wasm_bindgen::prelude::*;

pub fn get_color(color: &str) -> JsValue {
    JsValue::from_str(&color)
}

pub trait IsPointInternal {
    fn is_point_internal(&self, pos: &Point) -> bool;
}

pub trait Intersects<T, U> {
    fn intersects(a: &T, b: &U) -> bool;
}

pub struct Shape;

impl Intersects<Rect, Rect> for Shape {
    fn intersects(a: &Rect, b: &Rect) -> bool {
        let p1 = a.pos;
        let p2 = b.pos;

        (between(p1.x, p2.x, a.width) || between(p2.x, p1.x, b.width))
            && (between(p1.y, p2.y, a.height) || between(p2.y, p1.y, b.height))
    }
}

impl Intersects<Rect, Circle> for Shape {
    fn intersects(_: &Rect, _: &Circle) -> bool {
        // TODO
        false
    }
}

impl Intersects<Circle, Rect> for Shape {
    fn intersects(a: &Circle, b: &Rect) -> bool {
        Shape::intersects(b, a)
    }
}

impl Intersects<Circle, Circle> for Shape {
    fn intersects(a: &Circle, b: &Circle) -> bool {
        a.pos.dist(&b.pos) <= a.radius + b.radius
    }
}
