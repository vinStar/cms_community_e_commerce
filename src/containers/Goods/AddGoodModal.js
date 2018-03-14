import React from 'react';
import {
  message,
  Icon,
  Upload,
  Modal,
  Form,
  Input
} from 'antd';

const FormItem = Form.Item

const AddGoodModal = Form.create()(
  (props) => {
    const {
      visible,
      handleCancel,
      handleSubmit,
      form
    } = props
    console.log(props)

    const { getFieldDecorator } = form

    return (
      <Modal
        visible={visible}
        title="新增商品"
        okText="保存"
        cancelText="取消"
        onCancel={handleCancel}
        onOk={handleSubmit}
      >
        <Form layout="vertical">
          <FormItem label="商品名称:">
            {getFieldDecorator('goodName', {
              rules: [{
                required: true,
                message: '请输入商品名称'
              }, {
                len: 20,
                message: '商品名称不能多于20个字符'
              }]
            })(
              <Input type="text"/>
            )}
          </FormItem>
          <FormItem label="图片:">
            {getFieldDecorator('price', {
              rules: [{
                isRequired: true,
                message: '请上传商品图片'
              }]
            })(
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
              </Upload>
            )}
          </FormItem>
          <FormItem label="现价:">
            {getFieldDecorator('price', {
              rules: [{

              }]
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="原价:">
            {getFieldDecorator('originalPrice', {
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="规格:">
            {getFieldDecorator('spec', {
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="原产地:">
            {getFieldDecorator('origin', {
            })(
              <Input />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

export default AddGoodModal
