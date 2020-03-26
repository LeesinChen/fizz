import React from 'react'
import styles from './topbar.less'
import {Icon} from 'antd'

const View = props => {
  return (
    <div className={styles.bar}>
      <div>
        <span style={{marginRight: 40}}>
          <span className={styles.total}>总人数：</span>
          <span style={{fontSize: 22}}>68</span>
        </span>


        <span style={{marginRight: 20, fontSize: 18}}>
          <span><Icon style={{color: '#4D7CFE', fontWeight: 'bold'}} type="man" />男：</span>
          <span>38</span>
        </span>

        <span style={{marginRight: 20, fontSize: 18}}>
          <span><Icon style={{color: '#ff68b3', fontWeight: 'bold'}} type="woman" />女：</span>
          <span>30</span>
        </span>

      </div>
    </div>
  )
}

export default View
