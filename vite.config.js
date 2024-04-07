import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@views": path.resolve(__dirname, "./src/views"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
});
