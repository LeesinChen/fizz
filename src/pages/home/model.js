import registerServer from '@/utils/registerServer'
import api from '@/utils/api';
import request from '@/utils/request';

const {
  home_list,
} = api

const _service = registerServer({
  getList: {
    url: home_list,
    method: 'post'
  },
}, request)

const Model = {
  namespace: 'homeModel',
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/' || location.pathname === '/home') {
          dispatch({
            type: 'getList',
            payload: {
              page: 1,
              pageSize: 10,
              ...location.query
            }
          })
        }
      })
    }
  },
  effects: {
    *getList({ payload = {} }, { call, put }) {
      const res = yield call(_service.getList, payload);
    },
  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
};
export default Model;
