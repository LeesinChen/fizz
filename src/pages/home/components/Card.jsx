import React, {useState} from 'react'
import styles from './card.less'
import {Icon, Badge, Select, Radio, Table, Dropdown, Menu} from 'antd'
import classnames from 'classnames'
import _ from 'lodash'
import Progress from './Progress'

const View = props => {
  const {
    title,
    dataSource,
    total,
    spareTotal,
    checkedTotal,
    checkedMan,
    checkedWoman,
    spareMan,
    spareWoman,
    personSet,
    categoryId,
    searchId,
    id
  } = props

  const [filterData, updateData] = useState(dataSource)
  const len = filterData.length

  const menuClick = (key, data, index) => {

    let otherNumber = ''
    let action = ''

    if (key === 'up') {
      otherNumber = dataSource[index - 1].number
      action = 'sy'
    } else if (key === 'down') {
      otherNumber = dataSource[index + 1].number
      action = 'xy'
    } else {

    }

    const payload = {
      action,
      currentNumber: data.number,
      otherNumber: otherNumber
    }

    switch (key) {
      case 'up':
        personSet(payload);
        break;
      case 'down':
        personSet(payload);
        break;
      case 'move':
        break;
    }
  }

  const genderChange = (e) => {
    const gender = e.target.value
    if (gender == 0) {
      updateData(dataSource)
    } else {
      const newData = _.filter(dataSource, d => d.gender == gender)
      updateData(newData)
    }
  }

  const columns = [
    {
      title: '性别',
      dataIndex: 'gender',
      width: 50,
      render(val) {
        if (val == 1) {
          return <Icon style={{color: '#4D7CFE', fontWeight: 'bold'}} type="man" />
        } else {
          return <Icon style={{color: '#ff68b3', fontWeight: 'bold'}} type="woman" />
        }
      }
    },
    {
      title: '排队号',
      dataIndex: 'queueNumber',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '流水号',
      dataIndex: 'number',
      width: 150
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'action',
      width: 50,
      render(_, d, index) {
        return (
          <Dropdown overlay={
            <Menu onClick={({key}) => {
              menuClick(key, d, index)
            }}>
              {index > 0 &&
              <Menu.Item key="up"><Icon type="arrow-up" /> 上移</Menu.Item>
              }
              {index < len - 1 &&
              <Menu.Item key="down"><Icon type="arrow-down" /> 下移</Menu.Item>
              }
              <Menu.Item key="move"><Icon type="swap" /> 转移</Menu.Item>
            </Menu>
          }>
            <Icon type="setting" />
          </Dropdown>
        )
      }
    },
  ]

  return (
    <div className={classnames([styles.card, categoryId === id ? styles.cardActive : ''])}>
      <div className={styles.title}>
        <div>
          <span className={styles.titleText}>{title}</span>
          {/*<span>*/}
            {/*<Badge status="processing" />*/}
            {/*<Select size="small" defaultValue={1}>*/}
              {/*<Select.Option value={1}>在线</Select.Option>*/}
              {/*<Select.Option value={2}>离线</Select.Option>*/}
            {/*</Select>*/}
          {/*</span>*/}
        </div>
        <div className={styles.settingBar}>
          <Radio.Group
            defaultValue={0}
            size="small"
            onChange={genderChange}
          >
            <Radio.Button value={1}>男</Radio.Button>
            <Radio.Button value={2}>女</Radio.Button>
            <Radio.Button value={0}>不限</Radio.Button>
          </Radio.Group>
          {/*<Icon className={styles.icon} type="unlock" theme="filled" />*/}
          {/*<Icon className={styles.icon} type="eye-invisible" theme="filled" />*/}
          {/*<Icon className={styles.icon} type="setting" theme="filled" />*/}
        </div>
      </div>
      {/*<div className={styles.statusBar}>*/}
        {/*<div>*/}
          {/*<Radio.Group defaultValue="a" size="small">*/}
            {/*<Radio.Button value="a">开启</Radio.Button>*/}
            {/*<Radio.Button value="b">关闭</Radio.Button>*/}
          {/*</Radio.Group>*/}
        {/*</div>*/}
        {/*<div>*/}
          {/*<Radio.Group defaultValue="c" size="small">*/}
            {/*<Radio.Button value="a">男</Radio.Button>*/}
            {/*<Radio.Button value="b">女</Radio.Button>*/}
            {/*<Radio.Button value="c">不限</Radio.Button>*/}
          {/*</Radio.Group>*/}
        {/*</div>*/}
      {/*</div>*/}
      <div className={styles.info}>
        <Progress
          text={spareTotal > 0 ? `排队人数：${spareTotal}（男${spareMan} 女${spareWoman}）` : "排队人数：0"}
        />
      </div>
      <div className={styles.table}>
        <Table
          size="small"
          bordered={false}
          columns={columns}
          dataSource={filterData}
          pagination={false}
          rowKey={(_, i) => i}
          rowClassName={(d, i) => {
            if (d.id === searchId) {
              return 'activeRow'
            }
          }}
          scroll={{
            y: 180
          }}
        />
      </div>
    </div>
  )
}

export default View
