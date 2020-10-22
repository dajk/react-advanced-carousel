# react-carousel

> Carousel for React

![npm](https://img.shields.io/npm/v/@dajk/react-carousel/latest)
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
import React from 'react'
import Carousel from '@dajk/react-carousel'

export const items = [
  { backgroundColor: 'blue', color: 'white' },
  { backgroundColor: 'red', color: 'white' },
  { backgroundColor: 'green', color: 'white' },
  { backgroundColor: 'yellow', color: 'black' },
]

const MyCarousel = () => {
  return (
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
  )
}
```

## License

MIT © [dajk](https://github.com/dajk)
