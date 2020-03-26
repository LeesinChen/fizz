import React from 'react';
import {connect} from 'dva';

// component

import Header from './components/Header'

const View = (
{
  homeModel,
  dispatch,
  location
}
) => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default connect(({ homeModel, loading }) => ({ homeModel, loading }))(View);
