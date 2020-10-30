import React from 'react'
import { Inner, Container } from './styles/jumbotron'

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>
}

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

export default Jumbotron
