import { css } from '.'

describe('css helper', () => {
  it('should render what is supposed to 😊', () => {
    const results = css`
      display: flex;
      justify-content: center;
    `
    expect(results).toContain('display: flex')
    expect(results).toContain('justify-content: center')
  })
})
