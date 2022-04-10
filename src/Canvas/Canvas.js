
import { useEffect, useRef } from 'react';
import './Canvas.sass';



function Canvas() {
  const canvasRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');



    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.width = '400';
    canvas.height = '300';
    console.log(canvas);

    ctx.moveTo(200,100);
    ctx.lineTo(500,200);
    ctx.strokeStyle = "pink";
    ctx.lineWidth = "10";
    ctx.stroke()

    // function loop(){
    //     canvas.clearReact(0,0,canvas.width,canvas.height)
    //     requestAnimationFrame(loop)
        
    // }

    // let numberOfRings = 1

    // function updateRings(){
    //     for( let i = 0; i < numberOfRings; i++){
    //         drawRing()
    //     }
    // }

    // function drawRing(){

    // }
  },[])


  return (
    <canvas ref={canvasRef} className='canvas' id='canvas'></canvas>
  );
}

export default Canvas;


// B09F9F