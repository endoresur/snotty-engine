import Entity from '@components/entitiy/index'
import Game from '@systems/game/index'
import Layer from '@systems/layer/index'

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement

const layer = new Layer('background')
const entity = new Entity('src/assets/logo192.png', 50, 50, 50, 50)

layer.addEntity(entity)

const game = new Game(canvas)
game.addLayer(layer)
game.start()

setInterval(() => {
  layer.toggleShown()
}, 300)
