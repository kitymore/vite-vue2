// 根据环境引入不同配置 process.env.VITE_APP_ENV

const environment = import.meta.env.VITE_APP_ENV || 'production';
const config = require('./env.' + environment);
module.exports = config;
