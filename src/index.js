/* global requestAnimationFrame */

import yo from 'yo-yo'
import render from './render'

const dom = render()
document.body.appendChild(dom)

let play = true
const loop = () => {
  yo.update(dom, render())
  if (play) requestAnimationFrame(loop)
}
// requestAnimationFrame(loop)
