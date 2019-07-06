import * as React from 'react'
import styled from 'styled-components'

type IStyledItem = {
  itemHeight: number
  itemWidth: number
}

const StyledItem = styled.li`
  height: ${(props: IStyledItem) => `${props.itemHeight}px`};
  flex: 1 0 ${(props: IStyledItem) => `${props.itemWidth}%`};
`

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: auto;
  padding: 0;
  margin: 0;
`

interface ICarousel {
  children: React.ReactChild[]
  visibleItems: number
  height: number
}

const Carousel = (props: ICarousel) => {
  const [width, setWidth] = React.useState(
    percentageOfScreen(props.visibleItems),
  )

  React.useEffect(() => {
    if (props.visibleItems) {
      setWidth(percentageOfScreen(props.visibleItems))
    }
  }, [setWidth, props.visibleItems])

  return (
    <StyledList>
      {props.children.map((item, index) => {
        return (
          <StyledItem itemHeight={props.height} itemWidth={width} key={index}>
            {item}
          </StyledItem>
        )
      })}
    </StyledList>
  )
}

Carousel.defaultProps = {
  visibleItems: 4,
  height: 200,
}

export default Carousel

function percentageOfScreen(numberOfItems: number) {
  return 100 / numberOfItems
}
