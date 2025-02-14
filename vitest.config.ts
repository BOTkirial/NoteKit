import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: "./dev/tests/_globalSetup.ts",
    setupFiles: "./dev/tests/_setup.ts",
    sequence: {
      shuffle: false
    }
  }
});