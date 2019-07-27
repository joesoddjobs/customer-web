import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Button from '../../../../components/Button'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 352px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  align-items: center;
  padding-top: 60px;
  padding-bottom: 70px;
`
export const HeaderText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 60px;
  font-weight: 700px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 40px;
`
export const BodyText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 21px;
  margin-top: 20px;
`
export const BookAJobButton = styled(Button)`
  margin-top: 44px;
  padding: 0px 25px;
`
