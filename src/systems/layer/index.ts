import Entity from '@components/entitiy/index'

class Layer {
  private name: string
  private entities: Entity[]

  public isShown: boolean

  constructor(name: string, isShown: boolean = true) {
    this.name = name
    this.entities = []
    this.isShown = isShown
  }

  public addEntity(entity: Entity): void {
    this.entities.push(entity)
  }

  public toggleShown(): void {
    this.isShown = !this.isShown
  }

  public render(context: CanvasRenderingContext2D): void {
    this.entities.forEach(entity => {
      if (entity.image && this.isShown) {
        context.drawImage(entity.image, entity.x, entity.y)
      }
    })
  }
}

export default Layer
