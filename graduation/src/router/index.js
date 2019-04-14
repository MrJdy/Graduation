/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:17:09
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 21:45:16
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
      path: '/company',
      name: 'Company',
      component: Company
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
