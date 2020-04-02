import React from 'react';
import styles from './header.less';
import {Button, Input, Row, Col, Icon, Radio, Form, Select, Badge, Checkbox, Tag} from 'antd';
import logo from '@/assets/logo.png';
import router from 'umi/router'

const {Search} = Input;

const View = props => {
  const {
    search
  } = props

  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logo}><img src={logo} alt=""/></div>
        <div className={styles.dv1} />
        <div className={styles.dv2} />
        <div className={styles.dv3} />
      </div>
      <div style={{textAlign: 'right'}}>
        <Search
          placeholder="请输入条码号、姓名"
          style={{
            width: 200,
            marginRight: 20
          }}
          onSearch={(keyword) => {
            search(keyword)
          }}
          onPressEnter={(e) => {
            const keyword = e.target.value
            search(keyword)
          }}
        />
        <Button
          style={{float: 'right'}}
          onClick={() => {
            router.replace('/home')
          }}
        ><Icon type="redo" />刷新</Button>
      </div>

    </div>
  )
}

export default View
