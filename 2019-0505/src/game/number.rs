use super::shape::{Point, Rect, IsPointInternal};
use super::text::draw_text;

pub struct Number {
    num: i64,
    rect: Rect,
    frame: Rect,
    used: bool,
}

impl Number {
    pub fn new(num: i64, pos: Point) -> Number {
        let width = 120.0;
        let height = 80.0;
        Number {
            num: num,
            rect: Rect::new(pos, width, height, "white"),
            frame: Rect::new(pos, width, height, "black"),
            used: false,
        }
    }

    pub fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        self.rect.draw_fill(ctx);
        self.frame.draw_stroke(ctx, 3.0);

        draw_text(
            ctx,
            //&format!(" {}{}", if self.num > 0 { "+" } else { "" }, self.num),
            &Number::format_num(self.num),
            self.rect.pos + Point::new(20.0, 60.0),
            "40px 'ＭＳ Ｐゴシック'",
            "black",
        );
    }

    pub fn update(&mut self) {
    }

    pub fn check_used(&self) -> bool {
        self.used
    }

    pub fn used(&mut self) {
        self.used = true;
    }

    pub fn get_num(&self) -> i64 {
        self.num
    }

    pub fn is_point_internal(&self, pos: &Point) -> bool {
        self.rect.is_point_internal(pos)
    }

    pub fn format_num(num: i64) -> String {
        format!("{}{}", if num > 0 { "+" } else { "" }, num)
    }
}
