import React from 'react'
import Header from './components/Header'
import Table from './components/JobsTable'
import { Container, TablesContainer } from './styles'

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <TablesContainer>
        <Table title="Scheduled Jobs" />
        <Table title="Past Jobs" past />
      </TablesContainer>
    </Container>
  )
}

export default Dashboard
