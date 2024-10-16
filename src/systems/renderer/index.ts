import Layer from '@systems/layer/index'

class Renderer {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private layers: Layer[]

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.layers = []
  }

  public addLayer(layer: Layer): void {
    this.layers.push(layer)
  }

  public clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  public render(): void {
    this.clear()

    const context = this.context
    if (context) {
      this.layers.forEach(layer => layer.render(context))
    }
  }
}

export default Renderer
