serve: wasm
    npx webpack
    cargo run

build: wasm
    npm install
    npx webpack

wasm:
    cargo fmt
    cd text-rts-wasm; wasm-pack build; cd ..

pages: build
    cp -r dist/* docs/
    cp -r public/* docs/