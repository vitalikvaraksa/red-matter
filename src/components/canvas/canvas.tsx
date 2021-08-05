import React, { useRef, useEffect, MouseEvent, useState } from 'react'
import styled from '../../utils/styled'

interface CanvasProps {
  rectInfo: any
  fillColor?: string
  changeRect: (rectInfo: any) => void
}

const Canvas: React.SFC<CanvasProps> = ({rectInfo, fillColor, changeRect}) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const [drawStatus, setDrawStatus] = useState(Boolean)
  const [firstPos, setFirstPos] = useState([0,0])

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current; // Assigning to a temp variable
      ctx!.beginPath(); // Note the Non Null Assertion
      ctx!.clearRect(0,0,400,400)
      ctx!.strokeStyle = `#${fillColor}`;
      ctx!.rect(rectInfo[0], rectInfo[1], rectInfo[2], rectInfo[3])
      ctx!.stroke();

      ctx!.beginPath(); // Note the Non Null Assertion
      ctx!.fillStyle = 'red'
      ctx!.arc(rectInfo[0], rectInfo[1], 8, 0, 2 * Math.PI)
      ctx!.fill()
      ctx!.stroke();
    }
  }, [rectInfo, fillColor])

  const handleEvent = (event: MouseEvent) => {
    if (canvasRef.current) {
      if (event.type === 'mousedown') {
        const x = event.pageX - canvasRef.current.offsetLeft
        const y = event.pageY - canvasRef.current.offsetTop
        setDrawStatus(true)
        setFirstPos([x, y])
        changeRect([x, y, 0, 0])
      }
      if (event.type === 'mousemove' && drawStatus) {
        const w = event.pageX - canvasRef.current.offsetLeft - firstPos[0]
        const h = event.pageY - canvasRef.current.offsetTop - firstPos[1]
        changeRect([firstPos[0], firstPos[1], w, h])
      }
      if (event.type === 'mouseup') {
        setDrawStatus(false)
      }
    }
  }

  return (
    <DrawRect ref={canvasRef} width={400} height={400} onMouseDown={handleEvent} onMouseMove={handleEvent} onMouseUp={handleEvent} />
  )
}
export default Canvas

const DrawRect = styled('canvas')`
  box-shadow: 0px 0px 2px 2px grey;
  background-color: white;
`
