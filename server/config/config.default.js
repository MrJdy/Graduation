/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:32:18
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-05-28 14:54:52
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554363423244_845';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];
  // 错误处理的中间件，设置只对 /api 前缀URL路径生效
  config.errorHandler = {
    match: '/api',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
    hsts: {
      enable: false,
    },
    methodnoallow: {
      enable: false,
    },
    noopen: {
      enable: false,
    },
    nosniff: {
      enable: false,
    },
    xssProtection: {
      enable: false,
    },
    csp: {
      enable: false,
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '39.107.121.241',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Jdy()001',
      // 数据库名
      database: 'graduation',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.static = {
    prefix: '/',
    dir: path.join(__dirname, '../app/public/dist'),
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
