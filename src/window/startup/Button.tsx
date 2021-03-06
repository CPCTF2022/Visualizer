import { Container, Sprite, Text } from '@inlet/react-pixi'
import { TextStyle } from '@pixi/text'
import { windowHeaderHeight } from '../globals'
import { SpriteHolder } from '../stores/SpriteHolder'

export interface ButtonProps {
  text: string
  click: () => void
  [key: string]: unknown
}

export const Button = ({ text, click, ...rest }: ButtonProps) => {
  const button = SpriteHolder.get('InButton.png')

  if (!button) return <></>
  return (
    <Container {...rest}>
      <Sprite
        width={150}
        height={windowHeaderHeight}
        texture={button}
        anchor={[0.5, 0.5]}
        position={[0, 0]}
        interactive
        click={click}
      />
      <Text
        text={text}
        anchor={0.5}
        position={0}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: 'DotGothic16, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: windowHeaderHeight * 0.5,
            fill: '#000'
          })
        }
      />
    </Container>
  )
}
