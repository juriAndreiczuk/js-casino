const CELLS_AMOUNT = 10
const COLUMNS_AMOUNT = 5

const fruits = [
  'apple', 'papaya', 'tanjelo', 'arbuz', 'mango', 'abrikos', 'sliva', 'malina'
]

const toCell = (n, col) => {
  const currentFruit = fruits[n] || fruits[n - fruits.length]
  return `
    <div
      data-type="cell"
      data-id="${n}-${col}"
      data-cell="${n}" 
      class="cell"
    > 
      <img src="assets/img/${currentFruit}.png"> 
    </div>
  `
}

const toColumn = (_, n) => {
  const cells = Array(CELLS_AMOUNT)
    .fill('')
    .map((_, index) => toCell(index, n))
    .join('')
  return `
    <div
      class="column"
      data-type="col"
      data-col="${n}"
    >${cells}</div>
  `;
}

export const createRoulette = () => {
  const colls = new Array(COLUMNS_AMOUNT)
    .fill('')
    .map(toColumn)
    .join('')
  return `<div class="casino__table">${colls}</div>`
}
