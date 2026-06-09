import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './Typescript',

  reporter: [
    ['html']
  ],

  use: {
    //screenshot: 'only-on-failure', // or 'on'
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
  },

});