import { createStore, combineReducers } from 'redux'
import department from './reducer/Department'
import job from './reducer/Job'
import config from './reducer/Config'
import app from './reducer/App'

//创建Reducer对象
const allReudcer = {
  department,
  job,
  config,
  app,
}
const rootReducer = combineReducers(allReudcer)

//创建Store实例
const store = createStore(rootReducer)

export default store
