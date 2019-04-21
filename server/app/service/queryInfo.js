/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:40:06
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 19:03:16
 */

'use strict';
const Service = require('egg').Service;

class queryInfo extends Service {
  async queryCompany(data) {
    const queryResult = await this.app.mysql.get('companyInfo', {
      phone_num: data.phone,
    });
    return queryResult;
  }

  async queryAllCompany(data) {
    const queryCompany = await this.app.mysql.select('companyInfo');
    for (let i = 0; i < queryCompany.length; i++) {
      const queryUser = await this.app.mysql.get('userInfo', {
        phone_num: queryCompany[i].phone_num,
      });
      queryCompany[i].user_avatar = queryUser.user_avatar;
      const queryLike = await this.app.mysql.get('likeCompany', {
        phone_num: data.phone,
      });
      if (queryLike && queryLike.company_list.length > 0) {
        const companyList = JSON.parse(queryLike.company_list);
        if (companyList.indexOf(queryCompany[i].company_id) > -1) {
          queryCompany[i].isCollection = true;
        } else {
          queryCompany[i].isCollection = false;
        }
      } else {
        queryCompany[i].isCollection = false;
      }
    }
    return queryCompany;
  }

  async queryLikeCompany(data) {
    const queryLike = await this.app.mysql.get('likeCompany', {
      phone_num: data.phone,
    });
    const companyList = JSON.parse(queryLike.company_list);
    const likeCompanyData = [];
    for (let i = 0; i < companyList.length; i++) {
      const queryCompany = await this.app.mysql.get('companyInfo', {
        company_id: companyList[i],
      });
      const queryUserInfo = await this.app.mysql.get('userInfo', {
        phone_num: queryCompany.phone_num,
      });
      queryCompany.user_avatar = queryUserInfo.user_avatar;
      // const queryLike = await this.app.mysql.get('likeCompany', {
      //   phone_num: data.phone,
      // });
      if (companyList.indexOf(queryCompany.company_id) > -1) {
        queryCompany.isCollection = true;
      } else {
        queryCompany.isCollection = false;
      }
      likeCompanyData.push(queryCompany);
    }
    return likeCompanyData;
  }

  async queryPosition(data) {
    const queryCompany = await this.app.mysql.get('companyInfo', {
      phone_num: data.phone,
    });

    const queryUserInfo = await this.app.mysql.get('userInfo', {
      phone_num: data.phone,
    });
    const queryPosition = await this.app.mysql.select('positionInfo', {
      where: { company_id: queryCompany.company_id },
      columns: [
        'position_id',
        'company_id',
        'position_name',
        'position_time',
        'position_education',
        'position_details',
        'position_require',
        'position_salary',
      ],
      // limit: 20, // 返回数据量
      // offset: 0, // 数据偏移量
    });
    return {
      queryPosition,
      queryCompany,
      queryUserInfo,
    };
  }

  async queryAllPosition(data) {
    const queryPosition = await this.app.mysql.select('positionInfo');
    for (let i = 0; i < queryPosition.length; i++) {
      const queryCompany = await this.app.mysql.get('companyInfo', {
        company_id: queryPosition[i].company_id,
      });
      const queryUserInfo = await this.app.mysql.get('userInfo', {
        phone_num: queryCompany.phone_num,
      });
      const queryLike = await this.app.mysql.get('likePosition', {
        phone_num: data.phone,
      });
      if (queryLike && queryLike.position_list.length > 0) {
        const positionList = JSON.parse(queryLike.position_list);
        if (positionList.indexOf(queryPosition[i].position_id) > -1) {
          queryPosition[i].isCollection = true;
        } else {
          queryPosition[i].isCollection = false;
        }
      } else {
        queryPosition[i].isCollection = false;
      }
      queryPosition[i].company_name = queryCompany.company_name;
      queryPosition[i].company_local = queryCompany.company_local;
      queryPosition[i].user_avatar = queryUserInfo.user_avatar;
      queryPosition[i].user_name = queryUserInfo.user_name;
    }
    return queryPosition;
  }

  async queryLikePosition(data) {
    const queryLike = await this.app.mysql.get('likePosition', {
      phone_num: data.phone,
    });
    const positionList = JSON.parse(queryLike.position_list);
    const likePositionData = [];
    for (let i = 0; i < positionList.length; i++) {
      const queryPosition = await this.app.mysql.get('positionInfo', {
        position_id: positionList[i],
      });
      const queryCompany = await this.app.mysql.get('companyInfo', {
        company_id: queryPosition.company_id,
      });
      const queryUserInfo = await this.app.mysql.get('userInfo', {
        phone_num: queryCompany.phone_num,
      });
      if (positionList.indexOf(queryPosition.position_id) > -1) {
        queryPosition.isCollection = true;
      } else {
        queryPosition.isCollection = false;
      }
      queryPosition.company_name = queryCompany.company_name;
      queryPosition.company_local = queryCompany.company_local;
      queryPosition.user_avatar = queryUserInfo.user_avatar;
      queryPosition.user_name = queryUserInfo.user_name;
      likePositionData.push(queryPosition);
    }
    return likePositionData;
  }

  async queryResume(data) {
    const queryResult = await this.app.mysql.get('userResume', {
      phone_num: data.phone,
    });
    if (queryResult) {
      return queryResult;
    }
    return false;
  }
}
module.exports = queryInfo;
