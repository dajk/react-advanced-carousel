import * as React from 'react'
import { css } from '../../utils/css'
import { unique } from '../../utils/unique'

const uniqueList = unique()

export const List = (props: {
  children: JSX.Element | JSX.Element[]
  'data-testid': string
}) => {
  return (
    <>
      <style>
        {css`
          .${uniqueList} {
            display: flex;
            list-style: none;
            overflow-x: auto;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <ul data-testid={props['data-testid']} className={uniqueList}>
        {props.children}
      </ul>
    </>
  )
}
