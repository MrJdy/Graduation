/*
 * @Author: 姜定一
 * @Date: 2019-04-07 10:25:04
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-07 10:39:46
 */
'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    // 从配置中心获取 MySQL 的配置
    // { host: 'localhost', port: '3306', user: 'root', password: '123', database: 'graduation' }
    const mysqlConfig = await app.configCenter.fetch('mysql');
    app.database = app.mysql.createInstance(mysqlConfig);
  });
};
