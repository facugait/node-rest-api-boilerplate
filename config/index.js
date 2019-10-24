const config = {
  url: 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users',
  endpoint: '/api',
  env: process.env.NODE_ENV || 'dev',
  logging: ':method :url :status [:response-time ms] :date[web]',
  port: process.env.PORT || 3000,
};

module.exports = config;
