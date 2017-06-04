import html from 'yo-yo'
import { samples } from './utils'
import { colors } from './colors'

const width = 512
const height = 512

const threeHorizzontalColor = (c1, c2, c3) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="${width}" height="${height / 3}"
    fill="${c1}"
    stroke="${c1}"
  />
  <rect x="0" y="${height / 3}" width="${width}" height="${height / 3}"
    fill="${c2}"
    stroke="${c2}"
  />
  <rect x="0" y="${height / 3 * 2}" width="${width}" height="${height / 3}"
    fill="${c3}"
    stroke="${c3}"
  />
</g>
`

const threeVerticalColor = (c1, c2, c3) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="${height / 3}" height="${height}"
    fill="${c1}"
    stroke="${c1}"
  />
  <rect x="${height / 3}" y="0" width="${height / 3}" height="${height}"
    fill="${c2}"
    stroke="${c2}"
  />
  <rect x="${height / 3 * 2}" y="0" width="${height / 3}" height="${height}"
    fill="${c3}"
    stroke="${c3}"
  />
</g>
`
const twoHorizzontal = (c1, c2) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="${width}" height="${height / 2}"
    fill="${c1}"
    stroke="${c1}"
  />
  <rect x="0" y="${height / 2}" width="${width}" height="${height / 2}"
    fill="${c2}"
    stroke="${c2}"
  />
</g>
`

const twoVerticalColor = (c1, c2) => html`
<g stroke-width="1pt">
  <rect x="0" y="0" width="${width}" height="${height}"
    fill="${c1}"
    stroke="${c1}"
  />
  <rect x="${height / 2}" y="0" width="${width}" height="${height}"
    fill="${c2}"
    stroke="${c2}"
  />
</g>
`

const twoDiagonalColor1 = (c1, c2) => html`
<g stroke-width="1pt">
  <polygon width="${width}" height="${height}" points="0,0 0,512 512,512"
    fill="${c1}"
    stroke="${c1}"
  />
  <polygon width="${width}" height="${height}" points="0,0 512,0 512,512"
    fill="${c2}"
    stroke="${c2}"
  />
</g>
`

const twoDiagonalColor2 = (c1, c2) => html`
<g stroke-width="1pt">
  <polygon width="${width}" height="${height}" points="512,0 512,512 0,512"
    fill="${c1}"
    stroke="${c1}"
  />
  <polygon width="${width}" height="${height}" points="512,0 0,0 0,512"
    fill="${c2}"
    stroke="${c2}"
  />
</g>
`

const oneColor = (c1) => html`
<g>
  <rect x="0" y="0" width="${width}" height="${height}" fill="${c1}" />
</g>
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
