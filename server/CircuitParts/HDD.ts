import type { QuestionGenre } from '../../src/system/ResponseType'
import { CircuitParts } from '../CircuitParts'
export class HDD extends CircuitParts {
  public sizeX = 4
  public sizeY = 4
  public wirePointsInts: number[][] = new Array(this.sizeY * this.sizeX)
  public problemCategory: QuestionGenre = 'Pwn'
  constructor(isBig: boolean) {
    super(isBig)
    this.wirePointsInts.forEach(
      (_, i) => (this.wirePointsInts[i] = new Array(32))
    )
    //x=0,y=0のcellのwirePoints
    this.wirePointsInts[0 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[1 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[2 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[3 + 0 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[0 + 1 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[1 + 1 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[2 + 1 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[3 + 1 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[0 + 2 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[1 + 2 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[2 + 2 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[3 + 2 * this.sizeX] = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[0 + 3 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1
    ]
    this.wirePointsInts[1 + 3 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[2 + 3 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
    this.wirePointsInts[3 + 3 * this.sizeX] = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0
    ]
  }
}