import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3001", // Set the base URL for e2e tests
    supportFile: false, // Disable support file for e2e tests
  },
});
