/* global requestAnimationFrame */

'use strict'

import yo from 'yo-yo'
import data from './data'
import render from './render'

const dom = render(data())
document.body.appendChild(dom)

let play = true
const loop = () => {
  yo.update(dom, render(data()))
  if (play) requestAnimationFrame(loop)
}
// requestAnimationFrame(loop)
