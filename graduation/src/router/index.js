/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:17:09
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-08 21:50:44
 */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/login/login';
import Position from '../pages/position/position';

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
    }
  ]
});
