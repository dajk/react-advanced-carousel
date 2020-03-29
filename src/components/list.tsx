import React from 'react'
import styles from './index.css'

export const List = (props: {
  children: JSX.Element | JSX.Element[]
  'data-testid': string
}) => {
  return (
    <ul data-testid={props['data-testid']} className={styles.list}>
      {props.children}
    </ul>
  )
}
