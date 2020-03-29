import * as React from 'react'
import styles from './index.css'

export const Item = (props: {
  height: string
  width: string
  children: JSX.Element
  'data-testid': string
}) => {
  return (
    <li
      data-testid={props['data-testid']}
      className={styles.item}
      style={{
        minHeight: props.height,
        flexBasis: props.width,
      }}
    >
      {props.children}
    </li>
  )
}
