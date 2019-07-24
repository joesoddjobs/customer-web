import React from 'react'
import { Container } from './styles'
import {
  AboutUsBlock,
  BookAJobBlock,
  IntroBlock,
  JobTypesBlock,
  PriceBlock,
  TestimonialBlock
} from './components'

const Home = () => {
  return (
    <Container>
      <IntroBlock />
      <JobTypesBlock />
      <PriceBlock />
      <AboutUsBlock />
      <TestimonialBlock />
      <BookAJobBlock />
    </Container>
  )
}

export default Home
