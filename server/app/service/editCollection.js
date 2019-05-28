/*
 * @Author: 姜定一
 * @Date: 2019-04-16 23:25:22
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-05-28 14:54:13
 */

'use strict';
const Service = require('egg').Service;

class EditCollection extends Service {
  async editCollectionPosition(data) {
    const queryResult_1 = await this.app.mysql.get('likePosition', {
      phone_num: data.phone,
    });
    // 用户第一次收藏职位，插入一条数据
    if (!queryResult_1) {
      const arr = [];
      arr.push(data.positionId);
      const positionList = JSON.stringify(arr);
      const result = await this.app.mysql.insert('likePosition', {
        phone_num: data.phone,
        position_list: positionList,
      });
      const status = result.affectedRows === 1;
      return status;
    }
    // 不是第一次，1、获取已有的数据
    const queryResult_2 = await this.app.mysql.get('likePosition', {
      phone_num: data.phone,
    });
    // 2、将position_list解析
    const positionArr = JSON.parse(queryResult_2.position_list);
    // 3、插入信息收藏职位ID
    if (data.isCollection) {
      positionArr.push(data.positionId);
    } else {
      const index = positionArr.indexOf(data.positionId);
      positionArr.splice(index, 1);
    }
    const positionList = JSON.stringify(positionArr);
    // 更新到数据库
    const options = {
      where: {
        phone_num: data.phone,
      },
    };
    const updateResult = await this.app.mysql.update(
      'likePosition',
      { position_list: positionList },
      options
    );
    const status = updateResult.affectedRows === 1;
    return status;
  }

  async editCollectionCompany(data) {
    const queryResult_1 = await this.app.mysql.get('likeCompany', {
      phone_num: data.phone,
    });
    // 用户第一次收藏公司，插入一条数据
    if (!queryResult_1) {
      const arr = [];
      arr.push(data.companyId);
      const companyList = JSON.stringify(arr);
      const result = await this.app.mysql.insert('likeCompany', {
        phone_num: data.phone,
        company_list: companyList,
      });
      const status = result.affectedRows === 1;
      return status;
    }
    // 不是第一次，1、获取已有的数据
    const queryResult_2 = await this.app.mysql.get('likeCompany', {
      phone_num: data.phone,
    });
    // 2、将company_list解析
    const companyArr = JSON.parse(queryResult_2.company_list);
    // 3、插入信息收藏公司ID
    if (data.isCollection) {
      companyArr.push(data.companyId);
    } else {
      const index = companyArr.indexOf(data.companyId);
      companyArr.splice(index, 1);
    }
    const companyList = JSON.stringify(companyArr);
    // 更新到数据库
    const options = {
      where: {
        phone_num: data.phone,
      },
    };
    const updateResult = await this.app.mysql.update(
      'likeCompany',
      { company_list: companyList },
      options
    );
    const status = updateResult.affectedRows === 1;
    return status;
  }
}
module.exports = EditCollection;
