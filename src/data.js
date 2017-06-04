import _ from 'lodash'
import html from 'yo-yo'

const threeHorizzontalColor = html`
<g>
  <path transform="translate(-240 -6.64) scale(1.046)" fill="#ffc621" d="M1.923 9.69h991.84v475.89H1.923z"/>
  <path transform="translate(-240 -6.64) scale(1.046)" fill="#ef2118" d="M0 333.64h993.18v161.97H0z"/>
  <path transform="translate(-240 -6.64) scale(1.046)" fill="#298c08" d="M1.923 6.346h991.93v172H1.923z"/>
</g>
`
const oneColor = html`
<path fill="#fff" d="M0 0h512.005v512H0z"/>
`
const threeVerticalColor = html`
<g>
  <path fill="#fff" d="M0 0h512.005v512H0z"/>
  <path fill="#009246" d="M0 0h170.667v512H0z"/>
  <path fill="#ce2b37" d="M341.333 0H512v512H341.333z"/>
</g>
`

export default function data() {
  const background = () => {
    const elements = [
      threeHorizzontalColor,
      threeVerticalColor,
      oneColor,
    ]

    return _.sampleSize(elements, 3)
  }

  return { background }
}
