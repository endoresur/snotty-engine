import Layer from '@systems/layer/index'

class Renderer {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
  }

  public clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  public render(layers: Layer[]): void {
    this.clear()

    const context = this.context
    if (context) {
      layers.forEach(layer => layer.render(context))
    }
  }
}

export default Renderer
