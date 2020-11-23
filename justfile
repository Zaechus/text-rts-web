serve: wasm
    npx webpack
    cargo run

build: wasm
    npm install
    npx webpack

wasm:
    cargo fmt
    cd text-rts-wasm; wasm-pack build; cd ..

c:
    cargo fmt
    cargo update
    cd text-rts-wasm; cargo fmt; cargo update; cd ..

pages: build
    cp -r dist/* docs/
    cp -r public/* docs/
