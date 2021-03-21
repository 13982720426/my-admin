import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Table, Row, Col, Button, Pagination } from 'antd'

export default class TableBasis extends Component {
  render() {
    const {
      //   columns,
      //   dataSource,
      //   total,
      //   changePageCurrent,
      //   changePageSize,
      //   batchButton,
      //   handlerDelete,
      //   rowSelection,
      //   rowkey,
      thead,
    } = this.props.config
    return (
      <Fragment>
        <div className="spacing-30"></div>
        <Table
          //   rowKey={rowkey}
          //   pagination={false}
          //   columns={columns}
          //   dataSource={dataSource}
          //   rowSelection={rowSelection}
          columns={thead}
          bordered
        />
        {/* <Row>
          <Col span={8}>
            {batchButton && <Button onClick={handlerDelete}>批量删除</Button>}
          </Col>
          <Col span={16}>
            <Pagination
              onShowSizeChange={changePageSize}
              onChange={changePageCurrent}
              className="pull-right"
              total={total}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
            />
          </Col>
        </Row> */}
      </Fragment>
    )
  }
}

//校验数据类型
TableBasis.propTypes = {
  columns: PropTypes.object,
}
//默认值
TableBasis.defaultProps = {
  columns: [],
}
