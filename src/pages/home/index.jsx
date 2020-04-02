import React, {useState} from 'react';
import {connect} from 'dva';
import styles from './index.less';
import {Alert} from 'antd'

// component

import Top from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import SetModal from "./components/Modal";

const View = (
{
  homeModel,
  dispatch,
  location
}
) => {
  const {
    total, // 所有科室检查总人数
    checkedTotal, // 所有科室已检查总人数
    checkedMan, // 所有科室已检查男性
    checkedWoman, // 所有科室已检查女性
    spareTotal,
    spareMan, // 所有科室未检查男性
    spareWoman, // 所有科室未检查男性
    list,
    visible,
    alert,
    userInfo,
    categoryId,
    searchId,
    filterDataSource,
    unCheckedCategory=[],
    checkedCategory=[]
  } = homeModel

  const search = (keyword) => {
    dispatch({
      type: 'homeModel/find',
      payload: {
        keyword
      }
    })
  }

  const personSet = (payload) => {
    dispatch({
      type: 'homeModel/move',
      payload
    })
  }

  const handleClose = () => {
    dispatch({
      type: 'homeModel/updateState',
      payload: {
        categoryId: null,
        userInfo: {},
        alert: false,
        searchId: null,
      }
    })
  };

  const userMove = (payload) => {
    dispatch({
      type: 'homeModel/move',
      payload
    })
  }

  const setFilterData = (data, id) => {
    filterDataSource[id] = data
    dispatch({
      type: 'homeModel/updateState',
      payload: {
        filterDataSource
      }
    })
  }

  const getUserInfo = (payload) => {
    dispatch({
      type: 'homeModel/getUserInfo',
      payload
    })
  }

  return (
    <div className={styles.content}>
      <Header
        search={search}
      />
      <div className={styles.tableWrapper} id="scroll">
        <div className={styles.topBar}>
          {alert &&
          <Alert
            message="搜索人员信息"
            afterClose={handleClose}
            description={
              <div>
                <span>姓名：{userInfo.name}</span>
                <span>所在科室：{userInfo.id}</span>
              </div>
            }
            type="info"
            closable
            style={{
              marginBottom: 20
            }}
          />
          }
          <Top
            info={{
              total,
              spareTotal,
              checkedTotal,
              checkedMan,
              checkedWoman,
              spareMan,
              spareWoman
            }}
          />
        </div>
        <SetModal
          visible={visible}
          unCheckedCategory={unCheckedCategory}
          checkedCategory={checkedCategory}
          onCancel={() => {
            dispatch({
              type: 'homeModel/updateState',
              payload: {
                visible: false
              }
            });
          }}
        />
        {list.map((d, i) => {
          return (
            <div key={i} className={styles.item}>
              <Card
                categoryId={categoryId}
                searchId={searchId}
                id={d.id}
                title={d.name}
                total={d.total}
                spareTotal={d.spareTotal}
                checkedTotal={d.checkedTotal}
                checkedMan={d.checkedMan}
                checkedWoman={d.checkedWoman}
                spareMan={d.spareMan}
                spareWoman={d.spareWoman}
                dataSource={d.list}
                personSet={personSet}
                userMove={userMove}
                filterDataSource={filterDataSource[d.id]}
                getUserInfo={getUserInfo}
                updateData={(data) => {
                  setFilterData(data, d.id)
                }}
              />
            </div>
          )
        })}
        <div className={styles.em} />
        <div className={styles.em} />
        <div className={styles.em} />
        <div className={styles.em} />
      </div>
    </div>
  )
}

export default connect(({ homeModel, loading }) => ({ homeModel, loading }))(View);
