type Unique = {
  namespace: string | number
}

/**
 * *Generate unique string*
 *
 * @function unique
 * @param namespace or prefix
 * @usage to create classes for easier scoping the styling for html elements
 */
export function unique({ namespace }: Unique = { namespace: 'dl' }) {
  const ns = namespace ? namespace + '-' : ''
  return `${ns}${Math.random()
    .toString(36)
    .substring(2, 5)}${Math.random()
    .toString(36)
    .substring(2, 5)}`
}
