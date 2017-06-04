import html from 'yo-yo'
import { samples } from './utils'
import { colors } from './colors'

const oneBands = (c1) => html`
<g clip-path="url(#a)">
  <path d="M0 341.338v28.445h768.01v-28.445H0zm0 56.89v28.444h768.01v-28.445H0z"/
    fill="${c1}" >
</g>
`

const oneStar5 = (c1) => html`
<g transform="translate(256 256) scale(5.6889)" fill="${c1}">
  <g id="b">
    <path id="a" d="M0-8L-2.472-.392 1.332.845z"/>
    <use height="100%" width="100%" xlink:href="#a" transform="scale(-1 1)"/>
  </g>
  <use height="100%" width="100%" xlink:href="#b" transform="rotate(72)"/>
  <use height="100%" width="100%" xlink:href="#b" transform="rotate(144)"/>
  <use height="100%" width="100%" xlink:href="#b" transform="rotate(-144)"/>
  <use height="100%" width="100%" xlink:href="#b" transform="rotate(-72)"/>
</g>
`

const oneCircle = (c1) => html`
<ellipse
  cx="256"
  cy="256"
  rx="194.93"
  ry="194.93"
  fill="${c1}"
  />
`

const twoStar4 = (c1, c2) => html`
<path d="M121.673 32.904L104.986 96.16l-63.442 17.23 63.26 16.51 16.87 63.257L138.54 129.9l63.26-16.87-63.26-16.87-16.867-63.256z"
  stroke-width="2.975"
  stroke="${c1}"
  fill="${c2}"/>
`

export const foregrounds = [
  twoStar4(...samples(colors, 2)),
  oneStar5(...samples(colors, 2)),
  oneBands(...samples(colors, 1)),
  oneCircle(...samples(colors, 1)),
]
