require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: '4tree',
    description: 'Notes, tasks, mindmaps, cards and other productive tools',
    head: {
      titleTemplate: '%s - 4tree',
      meta: [
        {name: 'description', content: 'Big distribution store'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Relef'},
        {property: 'og:image', content: 'http://relef.ru/images/logo.png'},
        {property: 'og:locale', content: 'ru_RU'},
        {property: 'og:title', content: 'Relef'},
        {property: 'og:description', content: 'Big distribution store'},
        {property: 'og:card', content: 'Gaze from your telescope'},
        {property: 'og:site', content: '@CSSSR'},
        {property: 'og:creator', content: '@CSSSR'},
        {property: 'og:image:width', content: '104'},
        {property: 'og:image:height', content: '41'}
      ]
    }
  }
}, environment);
