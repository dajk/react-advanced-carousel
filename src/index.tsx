import * as React from 'react'

interface ICarousel {
  children?: React.ReactChild
}

const Carousel = (props: ICarousel) => {
  return <div>{props.children}</div>
}

Carousel.defaultProps = {}

export default Carousel
