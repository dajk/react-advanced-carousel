# react-advanced-carousel

> Advanced carousel for React

[![NPM](https://img.shields.io/npm/v/react-advanced-carousel.svg)](https://www.npmjs.com/package/react-advanced-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-advanced-carousel.svg)

## Install

```bash
npm install react-advanced-carousel
```

or

```bash
yarn add react-advanced-carousel
```

## Usage

```tsx
import React from 'react'
import Carousel from 'react-advanced-carousel'

const items = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' },
]

const MyCarousel = () => {
  return (
    <>
      <h1>My Carousel</h1>
      <Carousel>
        {items.map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
      </Carousel>
    </>
  )
}
```

## License

MIT © [dajk](https://github.com/dajk)
