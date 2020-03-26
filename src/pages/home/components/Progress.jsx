import React from 'react'
import styles from './prodress.less'


const View = props => {
  const {
    text
  } = props
  return (
    <div className={styles.progress}>
      {text}
    </div>
  )
}

export default View
