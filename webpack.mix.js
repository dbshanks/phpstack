let mix = require("laravel-mix");

mix
  .js("./static/js/app.js", "dist/js/")
  .sass("./static/scss/app.scss", "dist/css/")
  .browserSync({
    files: [
      "./dist/css/*.css",
      "./dist/js/*.js",
      "./*.php",
      "./views/partials/*.php",
      "./views/*.php",
    ],
    watch: true,
    proxy: "phpstack.test",
  });