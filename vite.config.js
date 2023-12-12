import { resolve } from "path";
import fs from "fs/promises";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		server: {
			port: 5000
		},
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
		define: {
			__TEST_NEWS_API_ENDPOINT__: JSON.stringify(env.TEST_NEWS_API_ENDPOINT),
			__TEST_VOICE_ENDPOINT__: JSON.stringify(env.TEST_VOICE_ENDPOINT)
		}
	};
});
