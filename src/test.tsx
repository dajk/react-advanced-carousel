import * as React from 'react'
import { render } from '../utils/test-utils'

import Carousel from '.'

describe('Carousel', () => {
  it('should render properly', async () => {
    const { findByTestId } = render(
      <Carousel>
        <span>1</span>
        <span>2</span>
      </Carousel>
    )
    const carousel = await findByTestId('carousel-list')
    expect(carousel).toBeTruthy()
  })
  it('should render 3 items', async () => {
    const { findAllByTestId } = render(
      <Carousel>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Carousel>
    )
    const item = await findAllByTestId('carousel-item')
    expect(item.length).toBe(3)
  })
})
