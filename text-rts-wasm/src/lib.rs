use wasm_bindgen::prelude::*;

use bracket_lib::prelude::*;

use text_rts::State;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str) -> String;
    pub fn prompt(s: &str) -> String;
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn start() {
    set_panic_hook();

    let ctx = BTermBuilder::simple(60, 30)
        .expect("failed creating BTermBuilder")
        .with_tile_dimensions(20, 20)
        .with_fullscreen(true)
        .with_fps_cap(60.0)
        .with_advanced_input(true)
        .with_title("TextRTS")
        .build()
        .expect("failed building BTerm");
    let gs = State::new(60, 30);

    main_loop(ctx, gs).expect("failed in main_loop")
}
