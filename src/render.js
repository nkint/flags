import html from 'yo-yo'
import { samples } from './utils'
import { backgrounds } from './backgrounds'
import { foregrounds } from './foregrounds'
import phonetic from 'phonetic'
import 'tachyons'

const width = 512
const height = 512

const flag = html`
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="${height}"
  width="${width}"
  viewBox="0 0 ${width} ${height}"
  class="absolute db w-80 top-0 left-0 h-auto"
>
  <g fill-rule="evenodd" stroke-width="1pt">
  ${samples(backgrounds)}
  ${samples(foregrounds)}
  </g>
</svg>
`

const render = (data) => {
  return html`
  <div class="ma2">
    <h1 class="dark-gray">Nation of ${phonetic.generate()}</h1>
    <div class="relative ib w-100">
      ${flag}
    </div>
  </div>
  `
}

module.exports = render
