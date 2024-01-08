import * as esbuild from "https://deno.land/x/esbuild@v0.19.2/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

// UserScript本体用のトランスコンパイル
const result1 = await esbuild.build({
  plugins: [...denoPlugins()],
  minify: true,
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  bundle: true,
  format: "esm"
});
console.log(result1);

// Electronのpreloadファイル生成用のトランスコンパイル
const result2 = await esbuild.build({
  plugins: [...denoPlugins()],
  minify: true,
  entryPoints: ["./src/preload.ts"],
  outfile: "./dist/preload.mjs",
  bundle: true,
  format: "esm"
});
console.log(result2);

esbuild.stop();