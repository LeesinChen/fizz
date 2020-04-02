import {Modal, Select, Form, Radio, Tag} from 'antd';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const View = props => {
  const {
    visible,
    unCheckedCategory,
    checkedCategory
  } = props;
  return (
    <div>
      {visible &&
        <Modal
          title="转移科室"
          {...props}
          visible={visible}
        >
          <Form.Item {...formItemLayout} label="已检查科室">
            {checkedCategory.map((d, i) => {
              return (
                <Tag color="#2db7f5" key={i}>{d.name}</Tag>
              )
            })}
          </Form.Item>
          <Form.Item {...formItemLayout} label="选择科室">
            <Radio.Group>
              {unCheckedCategory.map(d => {
                return (
                  <Radio style={{marginTop: 10}} value={d.id}>{d.name}</Radio>
                )
              })}
            </Radio.Group>
          </Form.Item>
        </Modal>
      }
    </div>
  )
}

export default Form.create()(View)
