import React from 'react'
import Carousel from 'react-carousel'
import { items } from './items'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        <Carousel visibleItems={3}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  border: '1px solid blue',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.name}
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}
