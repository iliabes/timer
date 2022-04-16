
import { useEffect, useRef } from 'react';
import './Canvas.sass';



function Canvas() {
  const canvasRef = useRef(null)

  useEffect(()=>{
    const cnv = canvasRef.current;
    const ctx = cnv.getContext(`2d`);


  


    let numberOfRings     = 5;
    const ringRadiusOffset  = 7;
    let ringRadius        = 250;
    const waveOffset        = 15;
    const colors            = [`#771111`, `#bb1111`, `#ff1111`];
    let startAngle          = 0;

 
    function init() {

      cnv.width  = window.innerWidth;
      cnv.height = window.innerHeight;
      if(cnv.width < 380){
        ringRadius = 150
      }
    }
    init();
  
    function updateRings() {
      for (let i = 0; i < numberOfRings; i++) {
        let radius = i * ringRadiusOffset + ringRadius;
        let offsetAngle = i * waveOffset * Math.PI / 180;
        drawRing(radius, colors[i], offsetAngle);
      }
  
      startAngle >= 360? startAngle = 0 : startAngle++;
    }
  
    let centerX = cnv.width  / 2;
    let centerY = cnv.height / 2;
  
    const maxWavesAmplitude = 17;
    const numberOfWaves     = 7;
  
    function drawRing(radius, color, offsetAngle) {
      ctx.strokeStyle = color;
      ctx.lineWidth   = 9;
  
      ctx.beginPath();
      
      for (let j = -180; j < 180; j++) {
        let currentAngle  = (j + startAngle) * Math.PI / 180;
        let displacement  = 0;
        let now = Math.abs(j);
  
        if (now > 70) {
          displacement = (now - 70) / 70;
        }
  
        if (displacement >= 1) {
          displacement = 1;
        }
  
        let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
        let x = centerX + Math.cos(currentAngle) * waveAmplitude;
        let y = centerY + Math.sin(currentAngle) * waveAmplitude;
        j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  
      }
      ctx.closePath();
      ctx.stroke();
    }
  
    function loop() {
      cnv.width |= 0; // ctx.clearRect(0, 0, cnv.width, cnv.height);
      updateRings();
      requestAnimationFrame(loop);
    }
    loop();

 
  
    window.addEventListener(`resize`, init);
  },[])

  function stop(){
    console.log(stop)
  }

  return (
    <>
  
    <canvas ref={canvasRef} className='canvas' id='canvas'></canvas>
 
    </>
  );
}

export default Canvas;


// B09F9F