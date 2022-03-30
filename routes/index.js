const showRoutes = require('./shows');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/', showRoutes);
  app.get('/about', (req, res) => {
    res.sendFile(path.resolve('static/about.html'));
  });

  app.use('*', (req, res) => {
    res.status(400).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;