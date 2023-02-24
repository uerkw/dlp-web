module.exports = {
    apps : [{
      name   : "dlp-web",
      script : "pnpm",
      args: "start",
      port : "8080",
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }