const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/analyze/faces',  // Update this with your Flask API endpoint
    createProxyMiddleware({
      target: 'http://localhost:5000',  // Update this with your Flask API URL
      changeOrigin: true,
    })
  );
};