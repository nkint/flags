/* global requestAnimationFrame */

import html from 'yo-yo'
import render from './render'

function onclick() {
  html.update(dom, render(onclick))
}

const dom = render(onclick)

document.body.appendChild(dom)

let play = true
const loop = () => {
  html.update(dom, render())
  if (play) requestAnimationFrame(loop)
}
// requestAnimationFrame(loop)
