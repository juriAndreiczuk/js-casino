export const createToolbar = () => {
  return `
    <div class="casino__toolbar-content">
      <div class="casino__toolbar-game">
        <div class="casino__toolbar-bet">
          <button class="casino__toolbar-toggler"
          data-type="bet" data-bet="up">
            +
          </button>
          <p class="casino__toolbar-text">
            Change bet
          </p>
          <button class="casino__toolbar-toggler"
          data-type="bet" data-bet="down">
            -
          </button>
        </div>
        <button class="casino__toolbar-start" 
        data-type="start" data-start="start">
          Start
        </button>
      </div>
      <div class="casino__toolbar-finish">
        <p class="casino__toolbar-finish__text">You lose ;(</p>
        <button 
          class="casino__toolbar-finish__button"
          data-type="restart"
        >
          Restart
        </button>
      </div> 
    </div>
  `
}
