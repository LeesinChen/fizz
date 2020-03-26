import React, {useState} from 'react'
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';

const View = props => {

  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default View
