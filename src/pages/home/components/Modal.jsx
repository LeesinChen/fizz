import {Modal, Select, Form, Radio, Tag} from 'antd';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const View = props => {
  const {
    visible,
    modalUserInfo,
    unCheckedCategory,
    checkedCategory,
    defaultCategoryId,
    userInfo,
    onSubmit,
    form: {
      getFieldDecorator,
      getFieldValue,
      getFieldsValue,
      setFieldsValue,
      setFields,
      validateFieldsAndScroll,
    },
  } = props;

  const submit = () => {
    const categoryId = getFieldValue('categoryId')
    const payload = {
      number: modalUserInfo.number,
      categoryId
    }
    onSubmit(payload)
  }

  return (
    <div>
      {visible &&
        <Modal
          title="转移科室"
          {...props}
          visible={visible}
          onOk={submit}
        >
          <Form.Item {...formItemLayout} label="人员信息">
            <span style={{marginRight: 20}}>{modalUserInfo.name}</span>
            <span>性别: {modalUserInfo.gender && modalUserInfo.gender === 1 ? '男' : '女'}</span>
          </Form.Item>

          <Form.Item {...formItemLayout} label="已检查科室">
            {checkedCategory.map((d, i) => {
              return (
                <Tag color="#2db7f5" key={i}>{d.name}</Tag>
              )
            })}
          </Form.Item>
          <Form.Item {...formItemLayout} label="选择科室">
            {getFieldDecorator('categoryId', {
              initialValue: defaultCategoryId,
            })(
              <Radio.Group>
                {unCheckedCategory.map(d => {
                  return (
                    <Radio style={{marginTop: 10}} value={d.id}>{d.name}</Radio>
                  )
                })}
              </Radio.Group>
            )}
          </Form.Item>
        </Modal>
      }
    </div>
  )
}

export default Form.create()(View)
