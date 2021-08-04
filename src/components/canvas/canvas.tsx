import React, { useRef, useEffect } from 'react'
import styled from '../../utils/styled'

interface CanvasProps {
  rectInfo: any
  fillColor?: string
}

const Canvas: React.SFC<CanvasProps> = ({rectInfo, fillColor}) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

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

  return (
    <DrawRect ref={canvasRef} width={400} height={400} />
  )
}
export default Canvas

const DrawRect = styled('canvas')`
  box-shadow: 0px 0px 2px 2px grey;
  background-color: white;
`
