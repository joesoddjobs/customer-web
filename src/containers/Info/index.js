import React from 'react'
import { Container } from './styles'
import Header from './components/Header'
import OverviewBanner from './components/OverviewBanner'
import WorkerAssuranceBlock from './components/WorkerAssuranceBlock'

const Info = () => {
  return (
    <Container>
      <Header />
      <OverviewBanner />
      <WorkerAssuranceBlock />
    </Container>
  )
}

export default Info
