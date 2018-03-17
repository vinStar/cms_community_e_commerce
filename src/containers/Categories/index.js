import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
import Panel from '../../components/Panel';
import {
  Button,
  Divider,
  Table
} from 'antd';

@connect(
  state => ({
    adminId: state.auth.admin.adminId,
    token: state.auth.admin.token,
    categories: state.categories.categories,
    isFetching: state.categories.isFetching
  }),
  dispatch => ({
    getCategories: () => dispatch(fetchCategories())
  })
)
export default class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {
      isFetching,
      categories
    } = this.props

    const columns = [{
      title: 'id',
      dataIndex: 'categoryId',
      key: 'categoryId'
    }, {
      title: '分类名称',
      dataIndex: 'categoryName',
      key: 'categoryName'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span style={{width: '200px'}}>
          <Button type="primary">
            修改
          </Button>
          <Divider type="vertical"/>
          <Button type="danger">
            删除
          </Button>
        </span>
      )
    }]

    return (
      <Panel>
        <Panel.Body>
          <Table
            rowKey={record => record.categoryId}
            dataSource={categories}
            columns={columns}
            loading={isFetching}
            bordered
          />
        </Panel.Body>
      </Panel>
    )
  }
}
