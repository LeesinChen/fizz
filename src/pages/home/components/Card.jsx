import React from 'react'
import styles from './card.less'
import {Icon, Badge, Select, Radio, Table} from 'antd'
import Progress from './Progress'

const View = props => {
  const {
    title,
    dataSource,
    total,
    man,
    woman,
  } = props

  const columns = [
    {
      title: '性别',
      dataIndex: 'gender',
      width: 50,
      render(val) {
        if (val === 1) {
          return <Icon style={{color: '#ff68b3', fontWeight: 'bold'}} type="woman" />
        } else {
          return <Icon style={{color: '#4D7CFE', fontWeight: 'bold'}} type="man" />
        }
      }
    },
    {
      title: '排队号',
      dataIndex: 'number',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '流水号',
      dataIndex: 'sNumber'
    }
  ]

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div>
          <span className={styles.titleText}>{title}</span>
          <span>
            <Badge status="processing" />
            <Select size="small" defaultValue={1}>
              <Select.Option value={1}>在线</Select.Option>
              <Select.Option value={2}>离线</Select.Option>
            </Select>
          </span>
        </div>
        <div className={styles.settingBar}>
          <Icon className={styles.icon} type="unlock" theme="filled" />
          <Icon className={styles.icon} type="eye-invisible" theme="filled" />
          <Icon className={styles.icon} type="setting" theme="filled" />
        </div>
      </div>
      <div className={styles.statusBar}>
        <div>
          <Radio.Group defaultValue="a" size="small">
            <Radio.Button value="a">开启</Radio.Button>
            <Radio.Button value="b">关闭</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Radio.Group defaultValue="c" size="small">
            <Radio.Button value="a">男</Radio.Button>
            <Radio.Button value="b">女</Radio.Button>
            <Radio.Button value="c">不限</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className={styles.info}>
        <Progress
          text={total > 0 ? `排队人数：${total}（男${man} 女${woman}）` : "排队人数：0"}
        />
      </div>
      <div className={styles.table}>
        <Table
          size="small"
          bordered={false}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey={(_, i) => i}
          scroll={{
            y: 160
          }}
        />
      </div>
    </div>
  )
}

export default View
