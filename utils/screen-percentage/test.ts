import { screenPercentage } from '.'

describe('screenPercentage helper', () => {
  it('should return valid css string', () => {
    const results = screenPercentage(2)
    expect(results).toMatch('50%')
  })
  it('should return empty string if non valid value', () => {
    const results = screenPercentage(null as any)
    expect(results).toMatch('')
  })
  it('should return empty string if 0 is passed', () => {
    const results = screenPercentage(0)
    expect(results).toMatch('')
  })
  it('should handle decimal numbers', () => {
    const results = screenPercentage(2.5)
    expect(results).toMatch('40%')
  })
})
