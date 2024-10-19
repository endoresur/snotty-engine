import Layer from '@systems/layer/index'
import Renderer from '@systems/renderer/index'

class Game {
  private renderer: Renderer
  private layers: Layer[]
  private isRunning: boolean

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas)
    this.layers = []
    this.isRunning = false
  }

  public addLayer(layer: Layer): void {
    this.layers.push(layer)
  }

  public start(): void {
    this.isRunning = true
    this.gameLoop()
  }

  public stop(): void {
    this.isRunning = false
  }

  private gameLoop(): void {
    if (!this.isRunning) return

    this.renderer.render(this.layers)
    requestAnimationFrame(() => this.gameLoop())
  }
}

export default Game
