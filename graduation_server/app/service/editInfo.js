/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:40:06
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 10:43:36
 */

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
    const params = {
      company_id: data.companyId,
      phone_num: data.phone,
      company_name: data.companyName,
      company_email: data.email,
      company_local: data.local,
      company_type: data.companyType,
      people_num: data.peopleNumber,
      company_financing: data.companyFinancing,
      company_introduction: data.introduction,
    };
    const insertResult = await this.app.mysql.insert('companyInfo', params);
    const status = insertResult.affectedRows === 1;
    return status;
  }
}
module.exports = EditInfo;
