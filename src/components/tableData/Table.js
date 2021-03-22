import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Table, Row, Col, Button, Pagination } from 'antd'
import { bindActionCreators } from 'redux'

class TableBasis extends Component {
  render() {
    const { thead } = this.props.config
    return (
      <Fragment>
        <div className="spacing-30"></div>
        <Table
          rowKey={this.props.rowKey}
          dataSource={this.props.list}
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
  rowKey: PropTypes.string,
}
//默认值
TableBasis.defaultProps = {
  columns: {},
  rowKey: 'id',
}

//把store中的数据映射到这个组件变成props
const mapStateToProps = (state) => {
  //mapState会将数据映射成this.props
  return {
    list: state.department.departmentList,
  }
}
export default connect(mapStateToProps, null)(TableBasis)
