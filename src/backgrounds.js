import html from 'yo-yo'
import { samples } from './utils'
import { colors } from './colors'

const threeHorizzontalColor = (c1, c2, c3) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="512" height="170" fill="${c1}" />
  <rect x="0" y="170" width="512" height="170" fill="${c2}" />
  <rect x="0" y="340" width="512" height="170" fill="${c3}" />
</g>
`

const threeVerticalColor = (c1, c2, c3) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="170" height="512" fill="${c1}" />
  <rect x="170" y="0" width="170" height="512" fill="${c2}" />
  <rect x="340" y="0" width="170" height="512" fill="${c3}" />
</g>
`
const twoHorizzontal = (c1, c2) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="512" height="256" fill="${c1}" />
  <rect x="0" y="256" width="512" height="256" fill="${c2}" />
</g>
`

const twoVerticalColor = (c1, c2) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="512" height="512" fill="${c1}" />
  <rect x="256" y="0" width="512" height="512" fill="${c2}" />
</g>
`

const twoDiagonalColor1 = (c1, c2) => html`
<g stroke-width="1pt">
  <polygon width="512" height="512" points="0,0 0,512 512,512" fill="${c1}"/>
  <polygon width="512" height="512" points="0,0 512,0 512,512" fill="${c2}"/>
</g>
`

const twoDiagonalColor2 = (c1, c2) => html`
<g stroke-width="1pt">
  <polygon width="512" height="512" points="512,0 512,512 0,512" fill="${c1}"/>
  <polygon width="512" height="512" points="512,0 0,0 0,512" fill="${c2}"/>
</g>
`

const oneColor = (c1) => html`
<rect x="0" y="0" width="512" height="512" fill="${c1}" />
`
export const backgrounds = [
  threeHorizzontalColor(...samples(colors, 3)),
  threeVerticalColor(...samples(colors, 3)),
  twoHorizzontal(...samples(colors, 2)),
  twoVerticalColor(...samples(colors, 2)),
  twoDiagonalColor1(...samples(colors, 2)),
  twoDiagonalColor2(...samples(colors, 2)),
  oneColor(...samples(colors, 1)),
]
