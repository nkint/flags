import html from 'yo-yo'
import { samples } from './utils'
import { backgrounds } from './backgrounds'
import { foregrounds } from './foregrounds'
import phonetic from 'phonetic'
import 'tachyons'

const width = 512
const height = 512

const flag = (name) => html`
<svg
  id="${name}"
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
  class="w-100 h-auto"
>
  <g fill-rule="evenodd" stroke-width="1pt">
    ${samples(backgrounds)}
    ${samples(foregrounds)}
    <rect x="0" y="0" width="${width}" height="${height}"
      stroke="black"
      fill-opacity="0"
    />
  </g>
</svg>
`

const render = (onclick) => {
  const name = phonetic.generate()
  return html`
  <div class="ma2">
    <h1 class="dark-gray georgia">Nation of ${name}</h1>
    <div>
      ${flag(name)}
    </div>
    <button onclick=${onclick}>Generate new Nation</button>
  </div>
  `
}

module.exports = render
