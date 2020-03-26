import React, {useState} from 'react';
import {connect} from 'dva';
import styles from './index.less';
import Loading from '@/components/Loading'

// component

import Top from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'

const View = (
{
  homeModel,
  dispatch,
  location
}
) => {

  const [visible, setVisible] = useState(true)

  const {list} = homeModel

  const refresh = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  setTimeout(() => {
    setVisible(false)
  }, 1000)


  return (
    <div className="content">
      <Loading visible={visible} />
      <Header
        refresh={refresh}
      />
      <div className={styles.topBar}>
        <Top />
      </div>

      <div className={styles.tableWrapper}>
        {list.map((d, i) => {
          return (
            <div key={i} className={styles.item}>
              <Card
                title={d.title}
                dataSource={d.dataSource}
                total={d.total}
                man={d.man}
                woman={d.woman}
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
