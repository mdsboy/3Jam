use wasm_bindgen::prelude::{wasm_bindgen, JsValue};

mod game;

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    game::run()
}
