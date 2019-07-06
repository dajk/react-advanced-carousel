import * as React from 'react'

interface ICarousel {
  children: React.ReactChild[]
  visibleItems: number
  height: number
}

const Carousel = (props: ICarousel) => {
  const [itemWidth, setItemWidth] = React.useState(
    percentageOfScreen(props.visibleItems),
  )

  React.useEffect(() => {
    if (props.visibleItems) {
      setItemWidth(percentageOfScreen(props.visibleItems))
    }
  }, [setItemWidth, props.visibleItems])

  return (
    <ul style={wrapperStyle}>
      {props.children.map((item, index) => {
        return (
          <li
            style={{
              ...itemStyle,
              height: props.height,
              flex: `1 0 ${itemWidth}`,
            }}
            key={index}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}

Carousel.defaultProps = {
  visibleItems: 4,
  height: 200,
}

const itemStyle: React.CSSProperties = {}

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  listStyle: 'none',
  overflowX: 'auto',
  padding: 0,
  margin: 0,
}

export default Carousel

function percentageOfScreen(numberOfItems: number) {
  return `${100 / numberOfItems}%`
}
