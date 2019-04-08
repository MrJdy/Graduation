/*
 * @Author: 姜定一
 * @Date: 2019-04-07 10:26:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-08 15:59:19
 */

'use strict';
const Service = require('egg').Service;

class Login extends Service {
  async login(data) {
    // 插入
    console.log(data);
    const result = await this.app.mysql.insert('userInfo', {
      phone_num: data.phone,
      user_name: data.userName,
    });
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
}
module.exports = Login;
