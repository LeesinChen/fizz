import React from 'react';
import styles from './header.less';
import {Button, Input, Row, Col, Icon, Radio, Form, Select, Badge, Checkbox, Tag} from 'antd';

const {Search} = Input;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const View = props => {
  const {refresh} = props
  return (
    <div className={styles.header}>
      <div>
        <Button
          type="primary"
          style={{
            marginRight: 20
          }}
        >
          <Icon type="upload" />
          导检入队
        </Button>
        <Button
          type="primary"
          style={{
            marginRight: 20
          }}
        >
          <Icon type="fullscreen-exit" />
          科室合并
        </Button>

        <Search
          placeholder="请输入条码号、姓名"
          style={{
            width: 200,
            marginRight: 20
          }}
        />

        <Radio.Group
          defaultValue={1}
          style={{
            marginRight: 20
          }}
        >
          <Radio.Button value={1}>全部显示</Radio.Button>
          <Radio.Button value={2}>隐藏</Radio.Button>
          <Radio.Button value={3}>显示</Radio.Button>
        </Radio.Group>

        <Checkbox>直接显示人员信息</Checkbox>

      </div>
      <div style={{textAlign: 'right'}}>

        <Tag
          color="#f50"
        >老年人</Tag>
        <Tag
          color="#2db7f5"
          style={{marginRight: 20}}
        >检查中</Tag>

        <span
          style={{
            marginRight: 10
          }}
        >科室过滤:</span>

        <Select
          defaultValue={1}
          style={{
            float: 'right',
            marginRight: 20
          }}
        >
          <Select.Option value={1}>开启</Select.Option>
          <Select.Option value={2}>关闭</Select.Option>
        </Select>

        <Button
          type="primary"
          style={{float: 'right'}}
          onClick={refresh}
        ><Icon type="redo" />刷新</Button>
      </div>





    </div>
  )
}

export default View
