import CasinoComponent from '@core/CasinoCopmonent'
import {createInfo} from './info.template'

export default class Info extends CasinoComponent {
  static className = 'casino__info'

  constructor($root, options) {
    super($root, {
      name: 'info',
      listeners: [],
      ...options
    })
  }

  toHtml() {
    return createInfo()
  }

  init() {
    super.init()
    this.$bet = this.$root.find('#info-bet')
    this.$money = this.$root.find('#info-money')
    this.$on('store:betChanged', (val) => {
      this.$bet.text(`${val}$`)
    })
    this.$on('store:moneyChanged', (val) => {
      this.$money.text(`${val}$`)
    })
    this.$on('store:gameOverChanged', (val) => {
      const operation = val ? 'addClass' : 'removeClass'
      this.$root[operation]('casino__info--finish')
    })
  }
}
