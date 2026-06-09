import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './Typescript/tests',
  reporter: [['list'], ['html']],
  use: {
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
  },
});
