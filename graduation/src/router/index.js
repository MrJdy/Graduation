/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:17:09
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-09 23:12:39
 */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/login/login';
import Position from '../pages/position/position';
import Company from '../pages/company/company';
import Message from '../pages/message/message';
import Mine from '../pages/mine/mine';

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
    }
  ]
});
