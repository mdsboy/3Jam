use super::shape::{get_color, Point};

pub fn draw_text(
    ctx: &web_sys::CanvasRenderingContext2d,
    s: &str,
    pos: Point,
    font: &str,
    color: &str,
) {
    ctx.set_font(font);

    ctx.set_fill_style(&get_color(color));
    ctx.fill_text(s, pos.x, pos.y).unwrap();
}
