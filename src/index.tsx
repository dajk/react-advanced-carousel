import * as React from 'react'
import styled from 'styled-components'

interface ICarousel {
  children?: React.ReactChild
}

const Wrapper = styled.div`
  border: 1px solid red;
  background-color: green;
`

const Carousel = (props: ICarousel) => {
  return <Wrapper>{props.children}</Wrapper>
}

Carousel.defaultProps = {}

export default Carousel
