import Entity from '@components/entitiy/index'

class Layer {
  private name: string
  private entities: Entity[]

  constructor(name: string) {
    this.name = name
    this.entities = []
  }

  public addEntity(entity: Entity): void {
    this.entities.push(entity)
  }

  public render(context: CanvasRenderingContext2D): void {
    this.entities.forEach(entity => {
      if (entity.image) {
        context.drawImage(entity.image, entity.x, entity.y)
      }
    })
  }
}

export default Layer
