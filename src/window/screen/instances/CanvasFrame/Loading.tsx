import { ThreeResourceLoader } from '#/system/Loader'
import { Container, Sprite, Text } from '@inlet/react-pixi'
import { BaseTexture, Rectangle, TextStyle, Texture } from 'pixi.js'
import { useEffect, useState, VFC } from 'react'
import folderSrc from './folder.png'
import loadingFrameSrc from './loading_frame.png'
import loadingFillSrc from './loading_fill.png'
import { addLoadFiles } from '#/globals/loadFiles'
import { FrameBackground } from '#/window/utils/MonoColorBG'

interface LoadingCanvasProps {
  width: number
  height: number
  loadedHandler: () => void
}

export const LoadingCanvas: VFC<LoadingCanvasProps> = ({
  width,
  height,
  loadedHandler
}) => {
  const [pathText, setPathText] = useState('')
  const [percent, setPercent] = useState(0)
  const [textures, setTextures] = useState<{
    textures: Texture[]
    index: number
  }>({ textures: [], index: -1 })

  useEffect(() => {
    const asyncFunc = async () => {
      addLoadFiles()
      await ThreeResourceLoader.load(({ path, total, count }) => {
        setPathText(path)
        setPercent(count / total)
      })
      loadedHandler()
    }
    asyncFunc()

    const baseTexture = new BaseTexture(folderSrc)
    setTextures({
      index: 0,
      textures: [
        new Texture(baseTexture, new Rectangle(64 * 0, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 1, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 2, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 3, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 4, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 5, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 6, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 7, 0, 64, 64))
      ]
    })

    const textureAnimation = setInterval(() => {
      setTextures(nowTextures => {
        return {
          index: (nowTextures.index + 1) % nowTextures.textures.length,
          textures: nowTextures.textures
        }
      })
    }, 200)

    return () => {
      clearInterval(textureAnimation)
    }
  }, [])

  return (
    <>
      <FrameBackground bgColor={0xffffff} width={width} height={height} />
      <Container position={[width / 2, height / 2]}>
        {textures.index < 0 ? null : (
          <Sprite
            texture={textures.textures[textures.index]}
            anchor={0.5}
            position={[0, -50]}
            width={64}
            height={64}
          />
        )}
        <Text
          text={pathText}
          anchor={0.5}
          position={[0, 0]}
          style={
            new TextStyle({
              align: 'center',
              fontFamily:
                'DotGothic16, "Source Sans Pro", Helvetica, sans-serif',
              fontSize: 20,
              fill: '#000'
            })
          }
        />
        <Sprite
          image={loadingFrameSrc}
          position={[0, 50]}
          anchor={0.5}
          width={260}
          height={32}
        >
          {new Array(Math.floor(16 * percent)).fill(null).map((_, index) => {
            return (
              <Sprite
                key={index}
                image={loadingFillSrc}
                anchor={[0, 0.5]}
                position={[(index - 8) * 16, 0]}
                width={16}
                height={32}
              />
            )
          })}
        </Sprite>
      </Container>
    </>
  )
}
