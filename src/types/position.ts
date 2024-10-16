export interface Position {
  x: number
  y: number
}

export interface Bounds extends Position {
  left: number
  right: number
  top: number
  bottom: number
}
