import { unique } from '.'

describe('unique helper', () => {
  it('should return string', () => {
    const results = unique()
    expect(results).toContain('dl-')
    expect(results.length).toBe(9)
  })
  it('should return passed prefix/namespace', () => {
    const results = unique({ namespace: 'prefix' })
    expect(results).toContain('prefix-')
    expect(results.length).toBe(13)
  })
  it('should return empty string if namespace is invalid', () => {
    const results = unique({ namespace: null as any })
    expect(results.length).toBe(6)
  })
  it('should handle namespace if number is passed', () => {
    const results = unique({ namespace: 4 })
    expect(results).toContain('4-')
    expect(results.length).toBe(8)
  })
})
