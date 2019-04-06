/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:32:18
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-06 11:32:18
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
