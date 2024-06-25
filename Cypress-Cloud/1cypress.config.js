const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'n54w4o',
  videoRecording: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  video: true,
  videoOptions: {
    videoUploadOnPasses: false,
  },
  screenshots: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
