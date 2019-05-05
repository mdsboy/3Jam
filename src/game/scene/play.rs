use super::super::event::{Event, MouseButton, State};
use super::super::number::Number;
use super::super::scene::Scene;
use super::super::shape::{Circle, Intersects, Point, Rect, Shape};
use super::super::text::draw_text;
use super::Title;
use js_sys::Math::random;

pub struct Play {/*
    player: Player,
    block: Rect,
    circle: Circle,*/
    location: web_sys::Location,
    numbers: Vec<Number>,
    size: usize,
    stage: usize,
    turn: usize,
    score1: i64,
    score2: i64,
    window: Rect,
    rect1: Rect,
    rect2: Rect,
    next: bool,
    cnt: usize,
    win: bool,
}

impl Play {
    pub fn new(location: web_sys::Location, window: Rect, stage: usize) -> Play {
        let size = match stage {
            1 => 2,
            2...3 => 4,
            4...5 => 6,
            6...8 => 8,
            _ => 10,
        };
        let mut numbers = Vec::new();
        for i in 0..size {
            let num = (random() * 1000.0) as i64 - 500;
            let x = if i % 2 == 0 {400.0} else {600.0};
            numbers.push(Number::new(num, Point::new(x, (i / 2 * 100 + 200) as f64)));
        }
        Play {/*
            player: Player::new(Point::new(0.0, 0.0)),
            block: Rect::new(Point::new(600.0, 600.0), 100.0, 100.0, "yellow"),
            circle: Circle::new(Point::new(400.0, 100.0), 30.0, "green"),*/
            location: location,
            numbers: numbers,
            size: size,
            stage: stage,
            turn: 0,
            score1: 0,
            score2: 0,
            window: window,
            rect1: Rect::new(Point::new(100.0, 400.0), 150.0, 100.0, "red"),
            rect2: Rect::new(Point::new(900.0, 400.0), 150.0, 100.0, "blue"),
            next: false,
            cnt: 0,
            win: false,
        }
    }

    pub fn draw(&self, ctx: &web_sys::CanvasRenderingContext2d) {
        self.window.draw_stroke(ctx, 5.0);
        /*
        self.player.draw(&ctx);
        self.block.draw_fill(&ctx);
        self.circle.draw_fill(&ctx);*/

        draw_text(
            ctx,
            &format!("Stage {}", self.stage),
            Point::new(100.0, 100.0),
            "50px 'ＭＳ Ｐゴシック'",
            "black",
        );

        self.rect1.draw_stroke(ctx, 3.0);
        self.rect2.draw_stroke(ctx, 3.0);

        for num in &self.numbers {
            if !num.check_used() {
                num.draw(ctx);
            }
        }
        draw_text(
            ctx,
            &Number::format_num(self.score1),
            Point::new(120.0, 420.0),
            "50px 'ＭＳ Ｐゴシック'",
            "black",
        );

        draw_text(
            ctx,
            &Number::format_num(self.score2),
            Point::new(920.0, 420.0),
            "50px 'ＭＳ Ｐゴシック'",
            "black",
        );

        if !self.next && self.cnt > 1 && self.turn % 2 == 0 {
            if self.stage <= 10 {
                if self.cnt < 600 {
                    draw_text(
                        ctx,
                        &format!("{}", (600 - self.cnt) / 60),
                        Point::new(550.0, 100.0),
                        "70px 'ＭＳ Ｐゴシック'",
                        "black",
                    );
                }
            } else {
                if self.cnt < 300 {
                    draw_text(
                        ctx,
                        &format!("{}", (300 - self.cnt) / 60),
                        Point::new(550.0, 100.0),
                        "70px 'ＭＳ Ｐゴシック'",
                        "black",
                    );
                }
            }
        }

        if self.next && self.cnt > 5 {
            if self.win {
                draw_text(
                    ctx,
                    "Win!",
                    Point::new(450.0, 400.0),
                    "90px 'ＭＳ Ｐゴシック'",
                    "red",
                );
                draw_text(
                    ctx,
                    "Z:next",
                    Point::new(450.0, 500.0),
                    "80px 'ＭＳ Ｐゴシック'",
                    "red",
                );
            } else {
                draw_text(
                    ctx,
                    "Lose...",
                    Point::new(450.0, 400.0),
                    "90px 'ＭＳ Ｐゴシック'",
                    "blue",
                );
                draw_text(
                    ctx,
                    "X:Title",
                    Point::new(450.0, 500.0),
                    "80px 'ＭＳ Ｐゴシック'",
                    "blue",
                );
                draw_text(
                    ctx,
                    "T:Tweet",
                    Point::new(450.0, 600.0),
                    "80px 'ＭＳ Ｐゴシック'",
                    "blue",
                );
            }
        }
    }

    pub fn update(&mut self, events: &Vec<Event>) -> Option<Scene> {
        /*
        self.player.update();

        if Shape::intersects(&self.player.rect, &self.block) {
            self.block.set_color("black");
        } else {
            self.block.set_color("yellow");
        }

        if Shape::intersects(&self.player.rect, &self.circle) {
            self.circle.set_color("black");
        } else {
            self.circle.set_color("green");
        }*/

        self.cnt += 1;
        if self.turn == self.size {
            self.win = self.score1.abs() <= self.score2.abs();
            self.next = true;
        } else if self.turn % 2 == 0 {
            if (self.stage <= 10 && self.cnt >= 600) || (self.stage > 10 && self.cnt >= 300) {
                self.win = false;
                self.next = true;
            }
        }

        if self.turn % 2 == 1 && self.cnt > 20 {
            loop {
                let num = (random() * self.size as f64) as usize % self.size;
                if !self.numbers[num].check_used() {
                    self.numbers[num].used();
                    self.score2 += self.numbers[num].get_num();
                    self.turn += 1;
                    self.cnt = 0;
                    return None;
                }
            }
        }

        for event in events {
            match event {
                Event::Key { state, kind } => {
                    if *state == State::Pressed {
                        match kind.as_str() {/*
                            "ArrowUp" => self.player.up = true,
                            "ArrowDown" => self.player.down = true,
                            "ArrowRight" => self.player.right = true,
                            "ArrowLeft" => self.player.left = true,*/
                            "Z" => {
                                if self.next && self.win {
                                    return Some(Scene::Play(Play::new(self.location.clone(), self.window.clone(), self.stage + 1)));
                                }
                            }
                            "T" => {
                                if self.next && !self.win {
                                    self.tweet();
                                }
                            }
                            "X" => {
                                if self.next && !self.win {
                                    return Some(Scene::Title(Title::new(self.location.clone(), self.window.clone())));
                                }
                            }
                            _ => {}
                        }
                    }
                    if *state == State::Released {
                        match kind.as_str() {/*
                            "ArrowUp" => self.player.up = false,
                            "ArrowDown" => self.player.down = false,
                            "ArrowRight" => self.player.right = false,
                            "ArrowLeft" => self.player.left = false,*/
                            _ => {}
                        }
                    }
                }
                Event::MouseClick {
                    state,
                    button,
                    position,
                } => {
                    if *state == State::Pressed && *button == MouseButton::Left {
                        /*
                        self.player.rect.pos.x = position.0;
                        self.player.rect.pos.y = position.1;*/
                        let pos = Point::new(position.0, position.1);
                        for num in &mut self.numbers {
                            if !num.check_used() && num.is_point_internal(&pos) {
                                num.used();
                                self.score1 += num.get_num();
                                self.turn += 1;
                                self.cnt = 0;
                                return None;
                            }
                        }
                    }
                }
                _ => {}
            }
        }

        for i in 0..self.size {
            self.numbers[i].update();
        }

        None
    }

    pub fn tweet(&self) {
        let txt = format!(
            "「0和ゲーム」でStage{}まで進んだよ！",
            self.stage
        );
        let url = "http://3jam0505.mds_boy.trap.show/";

        let tweeturl = format!(
            "https://twitter.com/intent/tweet?hashtags=traP3jam&text={}&url={}",
            js_sys::encode_uri_component(&txt).as_string().unwrap(),
            js_sys::encode_uri_component(url).as_string().unwrap(),
        );
        self.location.set_href(&tweeturl).unwrap();
    }

}