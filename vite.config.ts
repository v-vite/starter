import v from "v-vite";
import { type UserConfig, defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [v("src/resources/main.ts")],
	preview: {
		headers: {
			"Cache-Control": "public, max-age=600",
		},
	},
	resolve: {
		alias: {
			"@/": "/src/",
		},
	},
} satisfies UserConfig);
