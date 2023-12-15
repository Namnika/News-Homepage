/// <reference types="vitest" />
import { resolve } from "path";
import fs from "fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
	resolve: {
		alias: {
			src: resolve(__dirname, "src")
		}
	},
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
						build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
							loader: "jsx",
							contents: await fs.readFile(args.path, "utf8")
						}));
					}
				}
			]
		}
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setupTests.js"]
	}
}));
