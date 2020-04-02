import React, {useState} from 'react'
import styles from './index.less';
import { connect } from 'dva';

import Loading from '@/components/Loading';

const Index = props => {

  const {
    location,
    loading,
    dispatch,
    globalModel,
    route: { routes }
  } = props

  return (
    <div className={styles.container}>
      <Loading visible={loading.global} />
      {props.children}
    </div>
  );
}

export default connect(({globalModel, loading}) => ({globalModel, loading}))(Index);
