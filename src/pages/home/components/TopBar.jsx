import React from 'react'
import styles from './topbar.less'
import {Icon, Progress, Tag} from 'antd'

const View = props => {
  const {info={}} = props

  const percent = parseInt(info.checkedTotal/info.total*100)

  return (
    <div className={styles.bar}>
      <div>
        <div className={styles.barInfo}>
          <div>
            <Tag
              color="#1890ff"
            >已检查</Tag>
            <span>{info.checkedTotal}（男 {info.checkedMan} 女 {info.checkedWoman}）</span>
          </div>
          <div className={styles.info}>
            <span style={{marginRight: 10}}>
              <span>总人数：</span>
              <span>{info.total}</span>
            </span>
            <span style={{marginRight: 10, fontSize: 14, fontWeight: 'normal'}}>
              <span><Icon style={{color: '#4D7CFE'}} type="man" />男</span>
              <span>{info.checkedMan + info.spareMan}</span>
            </span>

            <span style={{marginRight: 10, fontSize: 14, fontWeight: 'normal'}}>
              <span><Icon style={{color: '#ff68b3', fontWeight: 'bold'}} type="woman" />女</span>
              <span>{info.checkedWoman + info.spareWoman}</span>
            </span>
          </div>
          <div style={{textAlign: 'right'}}>
            <Tag color="#f5f5f5"><span style={{color: '#999'}}>未检查</span></Tag>
            <span>{info.spareTotal}（男 {info.spareMan} 女 {info.spareWoman}）</span>
          </div>
        </div>
        <Progress
          percent={percent}
          status={percent < 100 ? 'active' : 'normal'}
          showInfo={false}
        />
      </div>
    </div>
  )
}

export default View
