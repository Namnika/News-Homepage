import { resolve } from "path";
import fs from "fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
	esbuild: {
		jsxFactory: "h",
		jsxFragment: "Fragment",
		loader: "jsx",
		include: /src\/.*\.jsx?$/,
		exclude: []
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: "load-js-files-as-jsx",
					setup(build) {
						build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
							loader: "jsx",
							contents: await fs.readFile(args.path, "utf8")
						}));
					}
				}
			]
		}
	},
	include: ["esm-dep > cjs-dep"],
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			"@": resolve(__dirname, "./src")
		}
	},
	plugins: [react()]
}));
