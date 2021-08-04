import React, { useState } from 'react'
import styled from '../../utils/styled'

import Canvas from './canvas'
import DrawButton from './button'
import ColorInput from './input'

const Panel: React.SFC = () => {
  const max = 400, min = 0
  const defaultRectInfo = [100, 100, 200, 200]
  const [fillColor, setFillColor] = useState('000')
  const [rectInfo, setRectInfo] = useState(defaultRectInfo)

  const onClick = () => {
    const posX = Math.floor(Math.random() * (max - min + 1)) + min;
    const posY = Math.floor(Math.random() * (max - min + 1)) + min;
    const width = Math.floor(Math.random() * (max - posX + 1)) + min;
    const height = Math.floor(Math.random() * (max - posY + 1)) + min;

    const newRectInfo = [posX, posY, width, height]
    console.log(newRectInfo)
    setRectInfo(newRectInfo)
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFillColor(e.currentTarget.value)
  }

  return (
    <PanelContainer>
      <Canvas rectInfo={rectInfo} fillColor={fillColor} />
      <DrawButton children='Draw Rectangle' onClick={onClick} />
      <ColorInput name='color' label='Input fill color: ' onChange={onChange} />
    </PanelContainer>
  )
}

export default Panel

const PanelContainer = styled('div')`
	width: 800px;
	height: 600px;
	box-shadow: 5px 5px 5px 5px grey;
	margin: 50px auto;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: space-around;
`
