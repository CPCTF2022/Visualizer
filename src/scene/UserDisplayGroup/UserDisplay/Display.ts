import { ThreeResourceLoader } from '#/system/Loader'
import { Time } from '#/system/Time'
import { VisualizerObject } from '#/templates/VisualizerObject'
import { PlaneBufferGeometry, ShaderMaterial, Texture } from 'three'
import fragmentShader from './DisplayFragment.frag?raw'
import vertexShader from './DisplayVertex.vert?raw'
import faceSrc from './face.png'
import gsap from 'gsap'
import testIcon from '#/utils/testicon.jpg'

export class Display extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(4.2 * 0.5, 2.8 * 0.5),
      new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          face: { value: ThreeResourceLoader.get(faceSrc) as Texture },
          icon: { value: null },
          mode: { value: -1 },
          progress: { value: 0 },
          time: { value: 0 }
        }
      })
    )
    this.position.set(0, 1.5, 0.9)
    this.rotation.set(-0.03 + Math.PI, -Math.PI, Math.PI)
  }

  public setIcon(iconTex: Texture | null) {
    // ;(this.material as ShaderMaterial).uniforms.icon.value = iconTex

    ;(this.material as ShaderMaterial).uniforms.icon.value = iconTex
      ? iconTex
      : (ThreeResourceLoader.get(testIcon) as Texture) // iconTex
  }

  public start() {
    // no impl
  }

  public animation() {
    const mode = (this.material as ShaderMaterial).uniforms.mode
    const progress = (this.material as ShaderMaterial).uniforms.progress
    if (!mode || !progress) return
    mode.value = 1
    progress.value = 1
    const tl = gsap.timeline()
    tl.to(progress, 0.3, { value: 0 })
    tl.call(
      () => {
        mode.value = Math.random() < 0.5 ? 0 : 2
        progress.value = 1
      },
      [],
      '+=1.7'
    )
    tl.to(progress, 0.3, { value: 0 })
    tl.set({}, {}, 1.7)
    tl.call(
      () => {
        mode.value = -1
        progress.value = 1
      },
      [],
      '+=1.7'
    )
    tl.to(progress, 0.3, { value: 0 })
  }

  public update() {
    super.update()
    const time = (this.material as ShaderMaterial).uniforms.time
    if (time) time.value = Time.time
  }
}
