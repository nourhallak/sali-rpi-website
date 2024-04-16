import * as wasm from "./rmqr_bg.wasm";
import { __wbg_set_wasm } from "./rmqr_bg.js";
__wbg_set_wasm(wasm);
export * from "./rmqr_bg.js";

wasm.__wbindgen_start();
