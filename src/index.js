import './assets/styles/index.scss'
import Casino from './components/casino/Casino'
import Toolbar from './components/toolbar/Toolbar'
import Info from './components/info/Info'
import Roulette from './components/roulette/Roulette'

const casino = new Casino({
  root: '#app',
  components: [Info, Toolbar, Roulette]
})
casino.render()
