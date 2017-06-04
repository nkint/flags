import yo from 'yo-yo'
import { width, height } from './data'

const render = (data) => yo`
<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}" viewBox="0 0 ${width} ${height}">
  <g fill-rule="evenodd" stroke-width="1pt">
  ${data.background()}
  </g>
</svg>
`

module.exports = render
