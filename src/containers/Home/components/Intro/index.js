import React from 'react'
import {
  Container,
  InfoContainer,
  Header,
  Info,
  BookAJobButton,
  Image
} from './styles'

const Intro = () => {
  return (
    <Container>
      <InfoContainer>
        <Header>Jobs the Big Guys Won&apos;t Touch</Header>
        <Info>
          Tackle the projects that the landscapers, movers, and contractors
          won&apos;t even call you back for, with Joe&apos;s Odd Jobs
        </Info>
        <BookAJobButton>Book a Job</BookAJobButton>
      </InfoContainer>
      <Image />
    </Container>
  )
}

export default Intro
