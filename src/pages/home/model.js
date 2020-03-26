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

const dataSource = [
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '慕容阿呆',
    gender: 2,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '刘能',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '王小二',
    gender: 2,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 2,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
  {
    id: 1,
    name: '张三',
    gender: 1,
    number: 'A001',
    sNumber: '11280098'
  },
]

const Model = {
  namespace: 'homeModel',
  state: {
    list: [
      {
        title: '妇科',
        dataSource: [],
        total: 0,
        man: 0,
        woman: 0
      },
      {
        title: '外科',
        dataSource: dataSource,
        total: 60,
        man: 22,
        woman: 38
      },
      {
        title: '一般情况',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: '眼科',
        dataSource: dataSource,
        total: 98,
        man: 40,
        woman: 58
      },
      {
        title: '耳鼻喉科',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: '检验科',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: '放射科',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: 'B超',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: '心电图',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
      {
        title: '胃镜检测',
        dataSource: dataSource,
        total: 58,
        man: 20,
        woman: 38
      },
    ],
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
