import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Form,
  Input
} from 'antd';

const FormItem = Form.Item

const UpdateGoodModal = Form.create()(
  (props) => {
    const {
      visible,
      onCancel,
      onUpdate,
      form
    } = props

    const { getFieldDecorator } = form
    let updateForm = props.updateForm || {}

    return (
      <Modal
        visible={visible}
        title="更新商品"
        okText="更新"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onUpdate}
      >
        <Form layout="vertical">
          <FormItem label="商品id:">
            {getFieldDecorator('goodId', {
              initialValue: updateForm.goodId || ''
            })(
              <Input disabled />
            )}
          </FormItem>
          <FormItem label="商品名称:">
            {getFieldDecorator('goodName', {
              initialValue: updateForm.goodName || ''
            })(
              <Input type="text"/>
            )}
          </FormItem>
          <FormItem label="现价:">
            {getFieldDecorator('price', {
              initialValue: updateForm.price || ''
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="原价:">
            {getFieldDecorator('originalPrice', {
              initialValue: updateForm.originalPrice || ''
            })(
              <Input type="number"/>
            )}
          </FormItem>
          <FormItem label="规格:">
            {getFieldDecorator('spec', {
              initialValue: updateForm.spec || ''
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="原产地:">
            {getFieldDecorator('origin', {
              initialValue: updateForm.origin || ''
            })(
              <Input />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

export default UpdateGoodModal
