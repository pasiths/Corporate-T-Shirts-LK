import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/",
    build: {
      outDir: "dist",
    },
    plugins: [react(),tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL),
    },
    server: {
      host: true,
      open:false,
      port: env.VITE_PORT ? parseInt(env.VITE_PORT, 10) : 3000,
      fs:{
        strict:false,
      }
    },
  };
});

