import * as React from 'react'
import { css } from '../../utils/css'
import { unique } from '../../utils/unique'

const uniqueItem = unique()
let createdItem = 0

export const Item = (props: {
  height: string
  width: string
  children: JSX.Element
  'data-testid': string
}) => {
  return (
    <>
      {createdItem < 1 ? (
        <style>
          {css`
            .${uniqueItem} {
              height: ${props.height};
              flex: 1 0 ${props.width};
              scroll-snap-align: center;
            }
          `}
          {
            // increment createdItem so that we asure only one creation
            createdItem++
          }
        </style>
      ) : null}
      <li data-testid={props['data-testid']} className={uniqueItem}>
        {props.children}
      </li>
    </>
  )
}
