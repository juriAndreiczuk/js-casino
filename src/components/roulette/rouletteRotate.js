import gsap from 'gsap'
import {$} from '@core/dom'
const CELL_HEIGHT = 64
const MAX_STEPS = 7
const WIN_FACTOR = 5

const searchCenter = ($root, steps) => {
  const result = []
  $root
    .findAll('[data-type="col"]')
    .forEach((col, index) => {
      const currentNumber = steps[index] + 1
      const currentItem = $(col).findAll('[data-type="cell"]')[currentNumber]
      result.push($(currentItem).data.cell)
    })
  return result
}

const checkWin = (elts) => {
  let result = 0
  for (const [index, item] of elts.entries()) {
    if (item !== elts[index + 1]) {
      break
    }
    result = index + 1
  }
  return result
}

export const rouletteRotate = ($root, resolve) => {
  const steps = new Array(5).fill(0)
    .map(() => Math.floor(Math.random() * MAX_STEPS))
  const randomY = steps
    .map(item => -1 * item * CELL_HEIGHT)

  const timeLine = gsap.timeline()
  timeLine.to('[data-type="col"]', {y: 0})
  $root
    .findAll('[data-type="col"]')
    .forEach((item, index) => {
      timeLine
        .to(
          item,
          {y: randomY[index]},
          index > 0 ? '-=.5' : '+.5'
        )
    })
    timeLine.add(() => {
      const winPoints = WIN_FACTOR * checkWin(searchCenter($root, steps))
      resolve(winPoints)
    })
}
