import {Modal, Select, Form, } from 'antd'


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const View = props => {
  const {
    visible,
  } = props;
  return (
    <div>
      {visible &&
        <Modal
          {...props}
          visible={visible}
        >
          <p>1111</p>
        </Modal>
      }
    </div>
  )
}

export default View
