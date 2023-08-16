import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/mod.js";
// Import the WASM build on platforms where running subprocesses is not
// permitted, such as Deno Deploy, or when running without `--allow-run`.
// import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/wasm.js";

import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.1/mod.ts";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  minify: false,
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  bundle: true,
  format: "esm"
});

console.log(result.outputFiles);

esbuild.stop();