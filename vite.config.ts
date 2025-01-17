import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "component",
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],

  css: {
    modules: {
      localsConvention: "camelCase",
    },

    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "shared/ui/theme/variables.scss" as *;
        `,
      },
    },
  },

  resolve: {
    alias: {
      app: fileURLToPath(new URL("./src/app", import.meta.url)),
      features: fileURLToPath(new URL("./src/features", import.meta.url)),
      shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
      entities: fileURLToPath(new URL("./src/entities", import.meta.url)),
      widgets: fileURLToPath(new URL("./src/widgets", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },

  server: {
    port: 3000,
  },

  build: {
    sourcemap: true,
  },
});
