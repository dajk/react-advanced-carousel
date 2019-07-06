import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import BaseCarousel from '.'

const Carousel = () => (
  <BaseCarousel visibleItems={2}>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </BaseCarousel>
)

describe('Carousel', () => {
  beforeEach(cleanup)
  it('should render properly', async () => {
    const { findByTestId } = render(<Carousel />)
    const carousel = await findByTestId('carousel-list')
    expect(carousel).toBeTruthy()
  })
  it('should render 3 items', async () => {
    const { findAllByTestId } = render(<Carousel />)
    const item = await findAllByTestId('carousel-item')
    expect(item.length).toBe(3)
  })
})
