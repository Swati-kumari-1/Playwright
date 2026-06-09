import { defineConfig } from '@playwright/test';

/*export default defineConfig({

  testDir: './Typescript/Authenticationtest_udemy',

  reporter: [
    ['html']
  ],

  use: {
    //screenshot: 'only-on-failure', // or 'on'
    screenshot: 'on',
    video: 'retain-on-failure',    // or 'on'ss
    trace: 'on',
  },

});*/


export default defineConfig({
  reporter: 'html',
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  }
});