/*
 * @Author: 姜定一
 * @Date: 2019-04-07 10:26:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-12 11:56:42
 */

'use strict';
const Service = require('egg').Service;

class Login extends Service {
  async login(data) {
    // 通过用户输入手机号查询，获取查询结果
    const queryResult = await this.app.mysql.get('userInfo', {
      phone_num: data.phone,
    });
    // 如果没有注册过自动为其注册
    if (!queryResult) {
      // 插入一条数据
      const avatarList = [
        'https://wx4.sinaimg.cn/mw690/006xTNWLly1g1wra9bf4pj30b40b40so.jpg',
        'https://wx3.sinaimg.cn/mw690/006xTNWLly1g1wra9c274j30b40b4weo.jpg',
        'https://wx4.sinaimg.cn/mw1024/006xTNWLly1g1wra9c3ivj30b40b4mxa.jpg',
        'https://wx4.sinaimg.cn/mw690/006xTNWLly1g1wra9gzr6j30b40b4weg.jpg',
      ];
      const index = Math.floor(Math.random() * 4);
      const user_avatar = avatarList[index];
      const result = await this.app.mysql.insert('userInfo', {
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
