import * as React from 'react'
import Carousel from 'react-carousel'
import { items } from './items'

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>React Carousel</h1>
        <Carousel>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...item,
                }}
              >
                {index}
              </div>
            )
          })}
        </Carousel>
      </>
    )
  }
}
