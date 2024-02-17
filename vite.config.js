import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/* import dsv from "@rollup/plugin-dsv"; */
import cvs from "vite-plugin-csv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cvs],
});
