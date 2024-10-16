import { Bounds } from 'types/position'

class Entity {
  public x: number
  public y: number
  public image: HTMLImageElement

  private width: number
  private height: number

  constructor(imageSrc: string, x: number, y: number, width: number, height: number) {
    this.image = new Image()
    this.image.src = imageSrc
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  public updatePosition(difX: number, difY: number): void {
    this.x += difX
    this.y += difY
  }

  public getBounds(): Bounds {
    return {
      x: this.x,
      y: this.y,
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height
    }
  }
}

export default Entity
