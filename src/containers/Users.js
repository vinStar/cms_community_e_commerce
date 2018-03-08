import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Panel from '../components/Panel';
import {
  Table,
  Button,
  Divider,
  Spin
} from 'antd';
import {
  fetchUsers
} from '../actions';

const { Body } = Panel

@connect(
  state => ({
    adminId: state.auth.user.userId,
    token: state.auth.user.token,
    isFetching: state.users.isFetching,
    users: state.users.users
  }),
  dispatch => ({
    fetchUsers: (adminId, token) => {
      dispatch(fetchUsers(adminId, token))
    }
  })
)
export default class Users extends React.Component {
  static propTypes = {
    adminId: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.adminId, this.props.token)
  }

  render() {
    const {
      users,
      isFetching
    } = this.props

    const columns =[{
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: '账号',
      dataIndex: 'userName',
      key: 'userName'
    }, {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName'
    }, {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone'
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary">
            修改信息
          </Button>
          <Divider type="vertical" />
          <Button type="danger">
            修改密码
          </Button>
        </span>
      )
    }]

    return (
      <Panel>
        <Panel.Body>
          <Spin spinning={isFetching}>
            <Table
              dataSource={users}
              columns={columns}
              bordered
            />
          </Spin>
        </Panel.Body>
      </Panel>
    )
  }
}
