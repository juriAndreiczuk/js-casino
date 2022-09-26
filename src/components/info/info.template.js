const START_POINTS = 10
const DEFAULT_BET = 5

export const createInfo = (win = 0) => {
  return `
    <div class="casino__info-content">
      <p>
        You have 
        <span 
          id="info-money"
          class="casino__info-money"
          data-money="${START_POINTS}"
        >
          ${START_POINTS}$
        </span>
      </p>
      <p>
        Your bet for next game:
        <span
          id="info-bet"
          data-bet="${DEFAULT_BET}"
        >
          ${DEFAULT_BET}$
        </span>
      </p>
      <p>You win 
        <span>${win}$</span>
      </p>
    </div>
  `
}
