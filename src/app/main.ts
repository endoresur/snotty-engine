import Entity from '@components/entitiy/index'
import Layer from '@systems/layer/index'
import Renderer from '@systems/renderer/index'

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement

const renderer = new Renderer(canvas)
const layer = new Layer('background')
const layer2 = new Layer('layer')

const entity = new Entity('src/assets/logo192.png', 50, 50, 50, 50)
const entity2 = new Entity('src/assets/logo192.png', 80, 80, 30, 30)

layer.addEntity(entity)
layer2.addEntity(entity2)

renderer.addLayer(layer)
renderer.addLayer(layer2)

function gameLoop(): void {
  entity.updatePosition(1, 0)
  entity2.updatePosition(-1, 0)
  renderer.render()

  requestAnimationFrame(gameLoop)
}

gameLoop()
