// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({env: 'production'});
        break;
    case 'local':
        module.exports = require('./config/webpack.local')({env: 'local'});
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.dev')({env: 'development'});
}
