/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:11:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-04 16:19:42
 */
import CONSTANT from '../constant/constant'
import { buildGetPromise } from '../lib/fetch'

const API = CONSTANT.API
export function test (data) {
  return buildGetPromise(API.test, data)
}
