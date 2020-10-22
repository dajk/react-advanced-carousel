import React from 'react'
import { render, fireEvent } from '../utils/test-utils'

import Carousel from '.'

window.HTMLElement.prototype.scrollTo = jest.fn()
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
}))

test('carousel should render initially', () => {
  const onSlideChange = jest.fn()
  const utils = render(
    <Carousel>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  )
  expect(onSlideChange).toHaveBeenCalledTimes(0)
  expect(utils.getAllByText(/1|2|3/).length).toBe(3)
})

test('carousel should load certain slider', () => {
  const onSlideChange = jest.fn()
  render(
    <Carousel initialSlideIndex={2} onSlideChange={onSlideChange}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  )
  expect(onSlideChange).toHaveBeenCalledTimes(1)
  expect(onSlideChange).toHaveBeenCalledWith(2)
})

test('on arrow press, carousel should move to the next/previous slide', () => {
  const onSlideChange = jest.fn()
  const utils = render(
    <Carousel onSlideChange={onSlideChange}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  )
  expect(onSlideChange).toHaveBeenCalledTimes(1)
  expect(onSlideChange).toHaveBeenCalledWith(0)
  fireEvent.click(utils.getByText(/›/))
  expect(onSlideChange).toHaveBeenCalledTimes(2)
  expect(onSlideChange).toHaveBeenCalledWith(1)
  fireEvent.click(utils.getByText(/‹/))
  expect(onSlideChange).toHaveBeenCalledWith(0)
})
