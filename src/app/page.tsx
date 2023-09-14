'use client'

import {useEffect, useRef, useState} from 'react';
import {runCanvasScript} from '@/helpers/canvas';
import {useMotionValueEvent, useScroll, motion} from 'framer-motion';
import {getLinearRateNew} from '@/helpers';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {scrollY} = useScroll();
  const [animateValue, setAnimateValue] = useState({transform: 1, opacity: 1, blur: 0});
  const [opacityValue, setOpacityValue] = useState(1);
  // const [animateValue, setAnimateValue] = useState({transform: 1, opacity: 1});

  useEffect(() => {
    if(canvasRef.current) runCanvasScript(canvasRef.current);
  }, [])

  useMotionValueEvent(scrollY, 'change', latestValue => {
    console.log('latestValue - ', latestValue);
    {
      const transformVal = getLinearRateNew({
        desiredRange: {from: 1, to: 3},
        relativeRange: {from: 0, to: 300},
        acc: latestValue
      });
      // const opacityVal = getLinearRateNew(1, 0, 0, 300, latestValue);
      const opacityVal = getLinearRateNew({
        desiredRange: {from: 1, to: 0},
        relativeRange: {from: 0, to: 300},
        acc: latestValue
      });
      // const blurVal = getLinearRateNew(0, 10, 1100, 1240, latestValue);
      const blurVal = getLinearRateNew({
        desiredRange: {from: 0, to: 10},
        relativeRange: {from: 1100, to: 1240},
        acc: latestValue
      });

      setAnimateValue({
        transform: transformVal,
        opacity: opacityVal,
        blur: blurVal
      })

      setOpacityValue(opacityVal);
    }
  })

  useEffect(() => {
  }, [])
  // initial={{opacity: 1}} animate={{scale: animateValue.transform, opacity: opacityValue}}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{filter: `blur(${animateValue.blur}px)`}} className="w-screen h-screen fixed">
        <canvas className="w-screen h-screen bg-[#0e1525] absolute top-0 left-0 z-10" ref={canvasRef}></canvas>
        <div className="z-20 relative w-full h-full flex flex-col items-center justify-center text-white">
          <div className="flex flex-col items-center justify-center" style={{transformOrigin: '50% 80% 0px', opacity: opacityValue, scale: animateValue.transform}}>
            <h2 className="text-4xl font-bold">Learning should be fun</h2>
            <p className="text-8xl font-extrabold mt-4">intuitive</p>
          </div>
          <motion.button animate={{opacity: opacityValue}} className="mt-10 bg-red-600 text-white px-10 py-3 rounded-lg">Start Learning</motion.button>
        </div>
      </div>
      <div className="w-screen h-screen mt-[150vh] z-10 bg-black">

      </div>
    </main>
  )
}
