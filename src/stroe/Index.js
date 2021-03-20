import { createStore, combineReducers } from 'redux'
import department from './action/Department'
import job from './action/Job'
import config from './action/Config'

//创建Reducer对象
const allReudcer = {
  department,
  job,
  config,
}
const rootReducer = combineReducers(allReudcer)

//创建Store实例
const store = createStore(rootReducer)

export default store
