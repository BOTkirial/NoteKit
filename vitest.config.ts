import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: "./dev/tests/_setup.ts",
    globalSetup: "./dev/tests/_globalSetup.ts"
  }
});