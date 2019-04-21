/*
 * @Author: 姜定一
 * @Date: 2019-04-10 11:19:38
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-10 15:19:38
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations
});
