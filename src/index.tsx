import React from 'react'
import Component from './components'
import { screenPercentage } from '../utils/screen-percentage'

interface ICarousel {
  children: JSX.Element[]
  visibleItems: number
  height: string
}

const Carousel = (props: ICarousel) => {
  const [itemWidth, setItemWidth] = React.useState(
    screenPercentage(props.visibleItems)
  )

  React.useEffect(() => {
    setItemWidth(screenPercentage(props.visibleItems))
  }, [setItemWidth, props.visibleItems])

  return (
    <Component.List data-testid="carousel-list">
      {props.children.map((item, index) => {
        return (
          <Component.Item
            data-testid="carousel-item"
            key={index}
            height={props.height}
            width={itemWidth}
          >
            {item}
          </Component.Item>
        )
      })}
    </Component.List>
  )
}

Carousel.defaultProps = {
  visibleItems: 4,
  height: '200px',
}

export default Carousel
