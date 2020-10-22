import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

// for more info: https://testing-library.com/docs/native-testing-library/setup#custom-render
