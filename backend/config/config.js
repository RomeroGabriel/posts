var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'production') {
  var config = require('./config.json');
  var envConfig = config[env];
  console.log(`ENV: ${env}`);
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
