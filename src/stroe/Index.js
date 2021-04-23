import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' //开发工具
import thunk from 'redux-thunk'

// Reducer
import department from './reducer/Department'
import job from './reducer/Job'
import config from './reducer/Config'
import app from './reducer/App'

// 创建 Reducer对象
const allReducer = { department, job, config, app }
const rootReducer = combineReducers(allReducer)

// 创建 Store 实例
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
) // 注入

export default store
