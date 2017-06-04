import html from 'yo-yo'
import { samples } from './utils'
import { backgrounds } from './backgrounds'
import { foregrounds } from './foregrounds'
import phonetic from 'phonetic'

export const width = 512
export const height = 512

const flag = html`
<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}" viewBox="0 0 ${width} ${height}">
  <g fill-rule="evenodd" stroke-width="1pt">
  ${samples(backgrounds)}
  ${samples(foregrounds)}
  </g>
</svg>
`

const render = (data) => {
  return html`
  <div>
    <h1>Nation of ${phonetic.generate()}</h1>
    ${flag}
  </div>
  `
}

module.exports = render
