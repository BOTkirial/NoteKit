import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./dev/tests/_setup.ts"
    // sequence: {
      // shuffle: false,
      // concurrent: false
    // }
  }
});