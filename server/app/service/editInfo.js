/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:40:06
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-05-28 16:37:25
 */

'use strict';
const Service = require('egg').Service;

class EditInfo extends Service {
  async editPosition(data) {
    const params = {
      position_id: data.positionId,
      company_id: data.companyId,
      position_name: data.name,
      position_time: data.workTime,
      position_education: data.education,
      position_details: data.description,
      position_require: data.require,
      position_salary: data.salary,
    };
    if (data.edit) {
      delete params.position_id;
      const options = {
        where: {
          position_id: data.positionId,
        },
      };
      const updateResult = await this.app.mysql.update(
        'position_info',
        params,
        options
      );
      const status = updateResult.affectedRows === 1;
      return status;
    }
    const insertResult = await this.app.mysql.insert('position_info', params);
    const status = insertResult.affectedRows === 1;
    return status;
  }

  async editCompany(data) {
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
    if (data.edit) {
      delete params.company_id;
      const options = {
        where: {
          company_id: data.companyId,
        },
      };
      const updateResult = await this.app.mysql.update(
        'company_info',
        params,
        options
      );
      const status = updateResult.affectedRows === 1;
      return status;
    }
    const insertResult = await this.app.mysql.insert('company_info', params);
    const status = insertResult.affectedRows === 1;
    return status;
  }

  async editUserInfo(data) {
    const params = {
      user_name: data.name,
      user_sex: data.sex,
      user_email: data.email,
    };
    const options = {
      where: {
        phone_num: data.phone,
      },
    };
    const updateResult = await this.app.mysql.update(
      'user_info',
      params,
      options
    );
    const status = updateResult.affectedRows === 1;
    return status;
  }

  async editResume(data) {
    const params = {
      phone_num: data.phone,
      work_status: data.status,
      expectation_salary: data.salary,
      expectation_city: data.city,
      work_experience: data.workExp,
      project_experience: data.projectExp,
      education_experience: data.educationExp,
      self_introduction: data.introduce,
    };
    if (data.edit) {
      delete params.phone_num;
      const options = {
        where: {
          phone_num: data.phone,
        },
      };
      const updateResult = await this.app.mysql.update(
        'user_resume',
        params,
        options
      );
      const status = updateResult.affectedRows === 1;
      return status;
    }
    const insertResult = await this.app.mysql.insert('user_resume', params);
    const status = insertResult.affectedRows === 1;
    return status;
  }
}
module.exports = EditInfo;
