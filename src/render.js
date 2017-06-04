import yo from 'yo-yo'

const render = (data) => yo`
<svg xmlns="http://www.w3.org/2000/svg" height="512" width="512" viewBox="0 0 512 512">
  <g fill-rule="evenodd" stroke-width="1pt">
  ${data.background()}
  </g>
</svg>
`

module.exports = render
