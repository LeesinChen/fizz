import registerServer from '@/utils/registerServer'
import api from '@/utils/api';
import request from '@/utils/request';
import {notification} from 'antd';
import router from 'umi/router';

const {
  home_list,
  find_list,
  user_move,
  user_info
} = api

const _service = registerServer({
  getList: {
    url: home_list,
    method: 'get'
  },
  find: {
    url: find_list,
    method: 'get'
  },
  move: {
    url: user_move,
    method: 'post'
  },
  getUserInfo: {
    url: user_info,
    method: 'get'
  }
}, request)

const Model = {
  namespace: 'homeModel',
  state: {
    total: 0, // 所有科室检查总人数
    checkedTotal: 0, // 所有科室已检查总人数
    checkedMan: 0, // 所有科室已检查男性
    checkedWoman: 0, // 所有科室已检查女性
    spareTotal: 0,
    spareMan: 0, // 所有科室未检查男性
    spareWoman: 0, // 所有科室未检查男性
    list: [],
    alert: false,
    filterDataSource: {},
    unCheckedCategory: [],
    checkedCategory: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/' || location.pathname === '/home') {
          dispatch({
            type: 'getList',
          })
        }
      })
    }
  },
  effects: {
    *getUserInfo({ payload = {} }, { call, put }) {
      const res = yield call(_service.getUserInfo, payload);
      if (res.code == 0 ) {
        const data = res.data
        yield put({
          type: 'updateState',
          payload: {
            visible: true,
            userInfo: '',
            unCheckedCategory: data.unCheckedCategory,
            checkedCategory: data.checkedCategory
          }
        })
      } else {
        throw {
          errorMessage: res.errorMessage
        }
      }
    },
    *move({ payload = {} }, { call, put }) {
      const res = yield call(_service.move, payload);
      if (res.code == 0 ) {
        notification.success({
          message: "更新成功！",
          duration: 1,
        })
        router.replace({
          pathname: '/home',
        })
      } else {
        throw {
          errorMessage: res.errorMessage
        }
      }
    },
    *find({ payload = {} }, { call, put }) {
      const res = yield call(_service.find, payload);
      if (res.code == 0 ) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: res.data,
            alert: true,
            categoryId: res.data.categoryId,
            searchId: res.data.id
          }
        })
      } else {
        throw {
          errorMessage: res.errorMessage
        }
      }
    },
    *getList({ payload = {} }, { call, put }) {
      const res = yield call(_service.getList, payload);
      if (res.code == 0 ) {

        const categoryList = res.data.filter(d => d.id)

        let filterDataSource = {}

        console.log('categoryList', categoryList)

        categoryList.forEach(d => {
          filterDataSource[d.id] = d.list
        })

        yield put({
          type: 'updateState',
          payload: {
            total: +res.total, // 所有科室检查总人数
            spareTotal: +res.spareTotal,
            checkedTotal: +res.checkedTotal, // 所有科室已检查总人数
            checkedMan: +res.checkedMan, // 所有科室已检查男性
            checkedWoman: +res.checkedWoman, // 所有科室已检查女性
            spareMan: +res.spareMan, // 所有科室未检查男性
            spareWoman: +res.spareWoman, // 所有科室未检查男性
            list: categoryList,
            filterDataSource,
          }
        })
      } else {
        throw {
          errorMessage: res.errorMessage
        }
      }
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
