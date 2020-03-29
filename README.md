# react-carousel

> Carousel for React

[![NPM](https://img.shields.io/npm/v/react-carousel.svg)](https://www.npmjs.com/package/@dajk/react-carousel)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/dajk/react-carousel/branch/master/graph/badge.svg)](https://codecov.io/gh/dajk/react-carousel)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dajk/react-carousel/latest)

## Install

```bash
npm install @dajk/react-carousel
```

or

```bash
yarn add @dajk/react-carousel
```

## Usage

```tsx
import * as React from 'react'
import Carousel from '@dajk/react-carousel'

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
        {items.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </Carousel>
    </>
  )
}
```

## License

MIT © [dajk](https://github.com/dajk)
