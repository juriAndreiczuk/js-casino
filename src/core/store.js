export default class Store {
  constructor(emitter) {
    this.emitter = emitter
    this.state = {
      money: 10,
      bet: 5,
      win: 0,
      inGame: false,
      gameOver: false
    }
    this.mutations = {
      bet: this.bet,
      money: this.money,
      inGame: this.inGame,
      gameOver: this.gameOver
    }
    Object.keys(this.mutations).forEach(mutation =>
      this.mutations[mutation] = this.mutations[mutation].bind(this))
  }
  bet(val, reset = false) {
    const nextBet = reset ? val : this.state.bet + val
    if ((nextBet >= 1 && nextBet <= this.state.money) || reset) {
      this.state.bet = nextBet
      this.emitter.emit('store:betChanged', this.state.bet)
    }
  }
  money(val = (this.state.bet * -1)) {
    this.state.money = val + this.state.money
    if (this.state.money < this.state.bet) {
      this.mutations.bet(this.state.money, true)
    }
    this.emitter.emit('store:moneyChanged', this.state.money)
  }
  inGame() {
    this.state.inGame = !this.state.inGame
    if (!this.state.inGame && !this.state.money & !this.state.win) {
      this.gameOver()
    }
    this.emitter.emit('store:inGameChanged', this.state.inGame)
  }
  gameOver() {
    this.state.gameOver = !this.state.gameOver
    this.emitter.emit('store:gameOverChanged', this.state.gameOver)
  }
}
