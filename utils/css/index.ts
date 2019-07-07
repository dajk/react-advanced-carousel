/**
 * *Support template literal*
 *
 * Respect convenstion from *styled-components* which
 * will support the syntax highlighting with _vscode_
 *
 * @function `css`
 * @param pieces template literals
 * @param props array of params
 */
export function css(pieces: TemplateStringsArray, ...props: any[]): string {
  let string = ''
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]
    const prop = props[i]
    string += piece + (prop ? prop : '')
  }
  return string
}
