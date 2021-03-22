import { configAddStatus } from '../Type'

//全局配置
const config = {
  status: [
    { label: '禁用', value: false },
    { label: '启用', value: true },
  ],
}

//默认配置
const configReducer = function (state = config, action) {
  switch (action.type) {
    case configAddStatus: {
      return {
        ...state,
        status: [...state.status, action.payload],
      }
    }

    default:
      return state
  }
}
export default configReducer
