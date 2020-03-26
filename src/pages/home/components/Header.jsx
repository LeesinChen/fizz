import React from 'react';
import styles from './header.less';
import {Button, Input, Row, Col, Icon, Radio, Form, Select, Badge, Checkbox} from 'antd';

const {Search} = Input;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const View = () => {
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

        <Checkbox
          style={{
            marginRight: 20
          }}
        >直接显示人员信息</Checkbox>

        <Radio.Group
          defaultValue={1}
        >
          <Radio value={1}>全部显示</Radio>
          <Radio value={2}>隐藏</Radio>
          <Radio value={3}>显示</Radio>
        </Radio.Group>

      </div>
      <div style={{textAlign: 'right'}}>
        <Badge
          status="processing"
          style={{
            marginRight: 20
          }}
          text={
            <span>正在检查</span>
          }
        />

        <Badge
          status="warning"
          style={{
            marginRight: 20
          }}
          text={
            <span>老年人</span>
          }
        />

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
        ><Icon type="redo" />刷新</Button>
      </div>





    </div>
  )
}

export default View
