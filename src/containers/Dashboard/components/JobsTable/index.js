import React from 'react'
import { Table } from 'antd'
import {
  columns,
  dataSource,
  currentJobActions,
  pastJobActions
} from './constants'
import { Container, Title } from './styles'

const JobsTable = ({ past, title }) => {
  const actions = past ? pastJobActions : currentJobActions
  return (
    <Container>
      <Title>{`${title}:`}</Title>
      <Table
        dataSource={dataSource}
        columns={[...columns, actions]}
        pagination={{ pageSize: 4 }}
      />
    </Container>
  )
}

export default JobsTable
