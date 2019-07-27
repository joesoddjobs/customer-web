import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
`
export const Title = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 42px;
  font-weight: 700px;
  line-height: 59px;
  color: ${({ theme }) => theme.colors.font.primary};
`
