import * as esbuild from "https://deno.land/x/esbuild@v0.19.2/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  minify: false,
  entryPoints: ["./src/preload.ts"],
  outfile: "./dist/preload.mjs",
  bundle: true,
  format: "esm"
});

console.log(result);

esbuild.stop();