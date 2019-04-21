/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:32:26
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-15 14:02:05
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};