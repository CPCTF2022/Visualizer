import { ThreeResourceLoader } from '#/system/Loader'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Mesh, MeshBasicMaterial } from 'three'
import { Display } from './Display'
import monitorSrc from './monitor.glb?url'

export class UserDisplay extends VisualizerGroup {
  constructor() {
    super()
    const display = (ThreeResourceLoader.get(monitorSrc) as Mesh).clone()
    display.material = new MeshBasicMaterial({ color: 0x00ff00 })
    this.add(display)
    this.add(new Display())
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
