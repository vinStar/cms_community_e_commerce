import React from 'react';
import {
  Layout,
  Row,
  Col,
  Icon,
  Tooltip,
  Card
} from 'antd';
import MetaBox from '@/components/MetaBox';
import Panel from '@/components/Panel';

export default class Dashboard extends React.Component {
  render() {
    return (
      <Layout.Content style={{backgroundColor: '#f0f2f5'}}>
         <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <MetaBox
              title="总销售额"
              icon={<Icon type="info-circle-o" />}
              info={'￥ ' + toThousands(36232.632)}
              desc="每日销售额： ￥ 1,682"
            >
            </MetaBox>
          </Col>
          <Col className="gutter-row" span={6}>
            <MetaBox
              title="待发货"
              info={toThousands(32)}
              desc="今日新增： 27"
            >
            </MetaBox>
          </Col>
          <Col className="gutter-row" span={6}>
            <MetaBox
              title="购物车收藏数"
              info={632}
              desc="今日新增： 83"
            >
            </MetaBox>
          </Col>
          <Col className="gutter-row" span={6}>
            <MetaBox
              title="成交笔数"
              info={115}
              desc="今日新增： 20"
            >
            </MetaBox>
          </Col>
        </Row>
        <Panel style={{marginTop: '30px'}}>
          <Panel.Header type="light">
            <h2>待处理订单</h2>
          </Panel.Header>
          <Panel.Body type="light">
          </Panel.Body>
        </Panel>
      </Layout.Content>
    )
  }
}

function toThousands (str) {
  if (!str) {
    return ''
  }

  return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
