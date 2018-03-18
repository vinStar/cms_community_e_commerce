import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  message,
  Icon,
  Upload,
  Modal,
  Form,
  Input
} from 'antd';
import CategorySelector from '../../components/CategorySelector';

const FormItem = Form.Item

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

@Form.create()
export default class AddGoodMOdal extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    isUploading: PropTypes.bool.isRequired
  }

  state = {
    loading: false,
    uploaded: false
  }

  beforeUpload = (file) => {
    const isJPGOrPNG = file.type === 'image/jpeg' || 'image/png';
    if (!isJPGOrPNG) {
      message.error('You can only upload JPG or PNG file!');
      return false
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return false
    }

    this.setState({
      uploaded: true,
      file
    })

    return false;
  }

  // handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, imageUrl => this.setState({
  //       imageUrl,
  //       loading: false,
  //     }));
  //   }
  // }

  renderUploadButton() {
    return (
      <Button type={this.state.uploaded ? "primary" : "dashed"}>
        <Icon type={this.props.upLoading ? 'loading':'plus'} />
        {this.state.uploaded ? (
          '上传成功'
        ) : (
          '上传图片'
        )}
      </Button>
    )
  }

  priceValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback('价格必须大于0')
    }
    callback()
  }

  render() {
    const {
      visible,
      handleCancel,
      handleSubmit,
      form
    } = this.props
    console.log(this.props)

    const { getFieldDecorator } = form
    const uploadButton = this.renderUploadButton()
    const imageUrl = this.state.imageUrl

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
                max: 20,
                min: 1,
                message: '商品名称不能超过20个字符'
              }]
            })(
              <Input type="text"/>
            )}
          </FormItem>
          <FormItem label="商品类别：">
            {getFieldDecorator('categoryId', {
              rules: [{
                required: true,
                message: '请选择商品类别'
              }]
            })(
              <CategorySelector />
            )}
          </FormItem>
          <FormItem label="图片:">
            {getFieldDecorator('image', {
              rules: [{
                required: true,
                message: '请上传商品图片'
              }]
            })(
              <Upload
                name="image"
                listType="picture"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={this.beforeUpload}
              >
                {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
              </Upload>
            )}
          </FormItem>
          <FormItem label="现价:">
            {getFieldDecorator('price', {
              rules: [{
                required: true,
                message: '请输入商品价格'
              }, {
                max: 10,
                message: '价格不能超过十位数'
              }, {
                validator: this.priceValidator
              }]
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="原价:">
            {getFieldDecorator('originalPrice', {
              rules: [{
                max: 10,
                message: '价格不能超过十位数'
              }, {
                validator:this.priceValidator
              }]
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="规格:">
            {getFieldDecorator('spec', {
              rules: [{
                required: true ,
                message: '请输入商品的规格'
              }]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="原产地:">
            {getFieldDecorator('origin', {
              rules: [{
                required: true,
                message: '请输入商品的原产地'
              }]
            })(
              <Input />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
