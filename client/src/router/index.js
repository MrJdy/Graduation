/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:17:09
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 11:04:33
 */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/personal/login/login';
import Position from '../pages/personal/position/position';
import Company from '../pages/personal/company/company';
import Message from '../pages/personal/message/message';
import Mine from '../pages/personal/mine/mine';
import HrMine from '../pages/recruiter/mine/mine';
import HrPosition from '../pages/recruiter/position/position';
import HrMessage from '../pages/recruiter/message/message';
import EditPosition from '../pages/recruiter/position/editPosition';
import EditCompany from '../pages/recruiter/company/editCompany';
import Setting from '../pages/setting/setting';
import Resume from '../pages/personal/resume/resume';
import PositionDetail from '../pages/personal/position/positionDetail';
import LikePosition from '../pages/personal/position/likePosition';
import CompanyDetail from '../pages/personal/company/companyDetail';
import LikeCompany from '../pages/personal/company/likeCompany';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/position',
      name: 'Position',
      component: Position
    },
    {
      path: '/like-position',
      name: 'LikePosition',
      component: LikePosition
    },
    {
      path: '/position-detail',
      name: 'PositionDetail',
      component: PositionDetail
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/company-detail',
      name: 'CompanyDetail',
      component: CompanyDetail
    },
    {
      path: '/like-company',
      name: 'LikeCompany',
      component: LikeCompany
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/hr-mine',
      name: 'HrMine',
      component: HrMine
    },
    {
      path: '/hr-position',
      name: 'HrPosition',
      component: HrPosition
    },
    {
      path: '/edit-position',
      name: 'EditPosition',
      component: EditPosition
    },
    {
      path: '/edit-company',
      name: 'EditCompany',
      component: EditCompany
    },
    {
      path: '/hr-message',
      name: 'HrMessage',
      component: HrMessage
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
});
