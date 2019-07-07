/**
 * Calculate item's width based on the number of items shown on the screen
 *
 * @returns returns string with percent
 * @note css valid property
 */
export function screenPercentage(numberOfItems: number) {
  if (typeof numberOfItems !== 'number' || numberOfItems === 0) {
    return ''
  }
  return `${100 / numberOfItems}%`
}
