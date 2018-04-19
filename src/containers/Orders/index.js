import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@/components/Panel';
import {
  Button,
  Layout,
  Breadcrumb,
  Divider,
  Form
} from 'antd';

export default class Orders extends React.Component {
  render() {
    return (
      <Layout.Content>
        <Panel minus>
          <Panel.Header type="light">
            <Breadcrumb>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>订单管理</Breadcrumb.Item>
            </Breadcrumb>
            <h2>订单管理</h2>
            <p>商品分类展示，可以进行新增商品分类，修改商品分类，删除商品分类操作</p>
            <Divider style={{marginTop: '10px', marginBottom: '30px'}} />
            {/* <Button
              type="primary"
              onClick={this.handleAddFormOpen}
            >
              新增分类
            </Button> */}
          </Panel.Header>
        </Panel>
      </Layout.Content>
    )
  }
}
