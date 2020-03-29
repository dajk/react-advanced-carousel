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
            scroll-snap-type: x mandatory;
            list-style: none;
            overflow-x: auto;
            padding: 0;
            margin: 0;
          }
        `}
        {css`
          /* Safar / Chrome */
          /* prettier-ignore */
          .${uniqueList + '::-webkit-scrollbar-track'},
          .${uniqueList + '::-webkit-scrollbar'},
          .${uniqueList + '::-webkit-scrollbar-thumb'} {
            width: 0;
            height: 0;
          }
          .${uniqueList} {
            /* Firefox */
            scrollbar-width: none;
            /* IE */
            -ms-overflow-style: none;
          }
        `}
      </style>
      <ul data-testid={props['data-testid']} className={uniqueList}>
        {props.children}
      </ul>
    </>
  )
}
