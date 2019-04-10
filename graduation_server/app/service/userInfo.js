/*
 * @Author: 姜定一
 * @Date: 2019-04-10 13:57:37
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 14:01:32
 */

'use strict';
const Service = require('egg').Service;

class UserInfo extends Service {
  async userInfo(data) {
    // 通过用户输入手机号查询，获取查询结果
    const queryResult = await this.app.mysql.get('userInfo', {
      phone_num: data.phone,
    });
    return {
      status: true,
      data: queryResult,
    };
  }
}
module.exports = UserInfo;
