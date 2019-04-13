
'use strict';
const Service = require('egg').Service;

class EditInfo extends Service {
  async editPosition(data) {
    console.log('职位信息----', data);
    // if (data.id) {
    //   // 更新数据库
    // } else {
    //   console.log(data);
    // }
    // const queryResult = await this.app.mysql.insert('userInfo', {
    //   phone_num: data.phone,
    // });
    return true;
  }

  async editCompany(data) {
    console.log('公司信息----', data);
    return true;
  }
}
module.exports = EditInfo;
