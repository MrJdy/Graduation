/*
 * @Author: 姜定一
 * @Date: 2019-04-07 10:26:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-05-28 16:34:47
 */

'use strict';
const Service = require('egg').Service;

class Login extends Service {
  async login(data) {
    // 通过用户输入手机号查询，获取查询结果
    const queryResult = await this.app.mysql.get('user_info', {
      phone_num: data.phone,
    });
    // 如果没有注册过自动为其注册
    if (!queryResult) {
      // 插入一条数据
      const avatarList = [
        'http://39.107.121.241:7001/avatar/001.jpg',
        'http://39.107.121.241:7001/avatar/002.jpg',
        'http://39.107.121.241:7001/avatar/003.jpg',
        'http://39.107.121.241:7001/avatar/005.jpg',
        'http://39.107.121.241:7001/avatar/006.jpg',
        'http://39.107.121.241:7001/avatar/007.jpg',
        'http://39.107.121.241:7001/avatar/008.jpg',
        'http://39.107.121.241:7001/avatar/009.jpg',
      ];
      const index = Math.floor(Math.random() * 8);
      const user_avatar = avatarList[index];
      const result = await this.app.mysql.insert('user_info', {
        phone_num: data.phone,
        user_name: data.userName,
        user_avatar,
      });
      // 判断插入成功
      const status = result.affectedRows === 1;
      // 将查询到的用户数据返回到客户端。
      return status;
    }
    // 已注册过，直接登录，并将用户数据返回给客户端。
    return true;
  }
}
module.exports = Login;
