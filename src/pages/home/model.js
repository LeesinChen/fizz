import registerServer from '@/utils/registerServer'
import api from '@/utils/api';
import request from '@/utils/request';
import {notification} from 'antd';
import router from 'umi/router';

const {
  home_list,
  find_list,
  user_move,
  user_info,
  save_category
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
  },
  saveCategory: {
    url: save_category,
    method: 'post'
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
    checkedCategory: [],
    modalUserInfo: {}
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
    *saveCategory({ payload = {} }, { call, put }) {
      const {code, details, value} = yield call(_service.saveCategory, payload);
      if (code == 0 ) {
        notification.success({
          message: "更新成功！",
          duration: 1,
        })
        router.replace({
          pathname: '/home',
        })
      } else {
        throw {
          errorMessage: value
        }
      }
    },
    *getUserInfo({ payload = {} }, { call, put }) {
      const {code, details, value} = yield call(_service.getUserInfo, payload);
      if (code == 0 ) {
        const data = details ? details.data : {
          unCheckedCategory: [],
          checkedCategory: [],
          deaufultCategory: {},
        }
        yield put({
          type: 'updateState',
          payload: {
            visible: true,
            unCheckedCategory: data.unCheckedCategory,
            checkedCategory: data.checkedCategory,
            defaultCategoryId: data.deaufultCategory.id
          }
        })
      } else {
        throw {
          errorMessage: value
        }
      }
    },
    *move({ payload = {} }, { call, put }) {
      const {code, details, value} = yield call(_service.move, payload);
      if (code == 0 ) {
        notification.success({
          message: "更新成功！",
          duration: 1,
        })
        router.replace({
          pathname: '/home',
        })
      } else {
        throw {
          errorMessage: value
        }
      }
    },
    *find({ payload = {} }, { call, put }) {
      const {code, details, value} = yield call(_service.find, payload);
      if (code == 0 ) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: details,
            alert: true,
            categoryId: details.queueCode,
            searchId: details.patientNum
          }
        })
      } else {
        throw {
          errorMessage: value
        }
      }
    },
    *getList({ payload = {} }, { call, put }) {
      const {code, details, value} = yield call(_service.getList, payload);
      if (code == 0 ) {
        const categoryList = details.data ? details.data.filter(d => d.id) : []

        let filterDataSource = {}

        categoryList.forEach(d => {
          filterDataSource[d.id] = d.list
        })

        yield put({
          type: 'updateState',
          payload: {
            total: +details.total, // 所有科室检查总人数
            spareTotal: +details.spareTotal,
            checkedTotal: +details.checkedTotal, // 所有科室已检查总人数
            checkedMan: +details.checkedMan, // 所有科室已检查男性
            checkedWoman: +details.checkedWoman, // 所有科室已检查女性
            spareMan: +details.spareMan, // 所有科室未检查男性
            spareWoman: +details.spareWoman, // 所有科室未检查男性
            list: categoryList,
            filterDataSource,
          }
        })
      } else {
        throw {
          errorMessage: value
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
