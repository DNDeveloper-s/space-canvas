'use client'

import {useEffect, useRef, useState} from 'react';
import {useMotionValue, useMotionValueEvent, useScroll} from 'framer-motion';
import Iphone2 from '../assets/images/iPhone2.png';
import Live from '../assets/images/live.png';
import AppStore from '../assets/images/app-store.svg';
import GooglePlay from '../assets/images/google-play.svg';
import Image from 'next/image';
import {LinearRateOptions} from '@/helpers/canvas';
import {Simulate} from 'react-dom/test-utils';
import reset = Simulate.reset;

function getLinearRateNew(options: LinearRateOptions) {
  const x = (options.desiredRange.from - options.desiredRange.to) / (options.relativeRange.from - options.relativeRange.to);
  const y = options.desiredRange.to - (options.relativeRange.to * x);
  let val = (options.acc * x) + y;
  if(options.acc < options.relativeRange.from) val = options.desiredRange.from;
  if(options.acc > options.relativeRange.to) val = options.desiredRange.to;
  return val;
}

const resetObj = {
  bg: 0,
  title: 0,
  para: 0,
  image: 0
}

export default function Home() {
  const {scrollY} = useScroll();
  const cx = useMotionValue(0);
  const [visibilityObject, setVisibilityObject] = useState({
    a: {
      bg: 1,
      title: 1,
      para: 1,
      image: 1
    },
    b: resetObj,
    c: resetObj,
    d: resetObj
  });
  const isFast = useRef(false);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      console.log('e - ', e.deltaMode, e.deltaY);
      // isFast.current = e.deltaY > 80;
      cx.set(e.deltaY);
    }

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    }
  }, [])

  useMotionValueEvent(scrollY, 'change', latestValue => {
    console.log('latestValue - ', latestValue, cx.getVelocity());

    // let i = 0;
    // if(cx.getVelocity() < 100) return;

    if(latestValue < 1400) {
      let a ={
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      // a.bg = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: 700, to: 1024},
      //   acc: latestValue
      // });
      // a.title = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: 536, to: 950},
      //   acc: latestValue
      // });
      // a.para = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: 930, to: 1000},
      //   acc: latestValue
      // });

      if(latestValue > 1350) {
        a.title = a.para = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 1350, to: 1400},
          acc: latestValue
        });

        a.bg = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 1350, to: 1400},
          acc: latestValue
        });
      }

      console.log('a - ', a);

      setVisibilityObject(c => ({
        a,
        b: resetObj,
        c: resetObj,
        d: resetObj
      }))
    }
    if(latestValue > 1400 && latestValue < 2100) {
      let b = {
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      b.bg = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1400, to: 1450},
        acc: latestValue
      });
      b.title = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1400, to: 1450},
        acc: latestValue
      });
      b.para = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1440, to: 1500},
        acc: latestValue
      });


      if(latestValue > 1850) {
        b.title = b.para = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 1850, to: 1900},
          acc: latestValue
        });

        b.bg = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 1850, to: 1900},
          acc: latestValue
        });
      }


      setVisibilityObject(c => ({
        a: resetObj,
        b,
        c: resetObj,
        d: resetObj
      }))
    }

    if(latestValue > 1900 && latestValue < 1536 + 1024 + 1024) {
      let c = {
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      c.bg = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1900, to: 1950},
        acc: latestValue
      });
      c.title = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1900, to: 1950},
        acc: latestValue
      });
      c.para = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 1940, to: 2000},
        acc: latestValue
      });


      if(latestValue > 2350) {
        c.title = c.para = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 2350, to: 2400},
          acc: latestValue
        });

        c.bg = getLinearRateNew({
          desiredRange: {from: 0.9999, to: 0},
          relativeRange: {from: 2350, to: 2400},
          acc: latestValue
        });
      }


      setVisibilityObject(_c => ({
        a: resetObj,
        b: resetObj,
        c,
        d: resetObj
      }))
    }

    if(latestValue > 2400 && latestValue < 1536 + 1024 + 1024 + 1024) {
      let d = {
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      d.bg = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 2400, to: 2450},
        acc: latestValue
      });
      d.title = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 2400, to: 2450},
        acc: latestValue
      });
      d.para = getLinearRateNew({
        desiredRange: {from: 0, to: 0.9999},
        relativeRange: {from: 2440, to: 2500},
        acc: latestValue
      });


      // if(latestValue > 2270 + 1024 - 200) {
      //   d.title = d.para = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: 2270 + 1024 + 1024 - 200, to: 2400 + 1024 + 1024 - 200 + 200},
      //     acc: latestValue
      //   });
      //
      //   d.bg = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: 2400 + 1024 + 1024, to: 2560 + 1024 + 1024 + 200},
      //     acc: latestValue
      //   });
      // }


      setVisibilityObject(_c => ({
        a: resetObj,
        b: resetObj,
        c: resetObj,
        d
      }))
    }
    // if(latestValue > 1536 && latestValue < 1536 + 1024) {
    //   const a = getLinearRateNew({
    //     desiredRange: {from: 1, to: 0},
    //     relativeRange: {from: 1700, to: 2048},
    //     acc: latestValue
    //   });
    //
    //   const b = getLinearRateNew({
    //     desiredRange: {from: 0, to: 1},
    //     relativeRange: {from: 1700, to: 2048},
    //     acc: latestValue
    //   });
    //
    //   setVisibilityObject({
    //     a,
    //     b,
    //     c: 0,
    //     d: 0
    //   })
    // }
    // if(latestValue > 1536 + 1024 && latestValue < 1536 + 1024 + 1024) {
    //   const b = getLinearRateNew({
    //     desiredRange: {from: 1, to: 0},
    //     relativeRange: {from: 2700, to: 3072},
    //     acc: latestValue
    //   });
    //
    //   const c = getLinearRateNew({
    //     desiredRange: {from: 0, to: 1},
    //     relativeRange: {from: 2700, to: 3072},
    //     acc: latestValue
    //   });
    //   setVisibilityObject({
    //     a: 0,
    //     b,
    //     c,
    //     d: 0
    //   })
    // }
    // if(latestValue > 1536 + 1024 + 1024 && latestValue < 1536 + 1024 + 1024 + 1024) {
    //   const c = getLinearRateNew({
    //     desiredRange: {from: 1, to: 0},
    //     relativeRange: {from: 3700, to: 4096},
    //     acc: latestValue
    //   });
    //
    //   const d = getLinearRateNew({
    //     desiredRange: {from: 0, to: 1},
    //     relativeRange: {from: 3700, to: 4096},
    //     acc: latestValue
    //   });
    //   setVisibilityObject({
    //     a: 0,
    //     b: 0,
    //     c,
    //     d
    //   })
    // }
  })

  return (
    <main>
      <div className="w-screen h-screen bg-white" />
      <div className="w-screen h-[350vh]">
        <div className="sticky top-0 left-0 w-screen h-[100vh]">
          <div className="absolute w-screen h-screen top-0 flex justify-between items-center left-0 z-50">
            <div style={{opacity: visibilityObject.a.bg}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 home-bg w-[80%] h-[80%]" />
            <div style={{opacity: visibilityObject.b.bg}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 video-bg w-[80%] h-[80%]" />
            <div style={{opacity: visibilityObject.c.bg}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 news-bg w-[80%] h-[80%]" />
            <div style={{opacity: visibilityObject.d.bg}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 blaze-bg w-[80%] h-[80%]" />
            <div className={"w-full h-full backdrop-blur-[400px] absolute top-0 left-0"} />
            <div className="w-[90%] max-w-6xl mx-auto">
              <div className="relative w-[270px] h-auto">
                <Image className="relative w-full" src={Iphone2} alt="Iphone" />
                <Image style={{opacity: visibilityObject.a.bg}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclass.webp" alt="Learning" />
                <Image style={{opacity: visibilityObject.b.bg}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src={Live} alt="Learning" />
                <Image style={{opacity: visibilityObject.c.bg}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclassvideo.webp" alt="Learning" />
                <Image style={{opacity: visibilityObject.d.bg}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/snap.webp" alt="Learning" />
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className="absolute w-screen h-screen top-0 flex justify-between items-center left-0 z-50">
            <div className="w-[90%] flex max-w-6xl mx-auto justify-between">
              <div className="relative w-[270px] h-auto">
                <Image className="relative w-full opacity-0 pointer-events-none" src={Iphone2} alt="Iphone" />
              </div>
              <div className="relative flex-1 max-w-[700px]">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-5">
                  <div>
                    <h2 className={"home-title title-text text-[2.5rem] font-[600]"} style={{opacity: visibilityObject.a.title}}>Comprehensive Learning</h2>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.a.para}}>Every topic. Every concept. Every question.</p>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.a.para}}>India&apos;s most driven teachers have covered it all!</p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                    <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-5">
                  <div>
                    <h2 className={"videos-title title-text text-[2.5rem] font-[600]"} style={{opacity: visibilityObject.b.title}}>Daily Live Classes</h2>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.b.para}}>Being consistent is the key to success.</p>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.b.para}}>So we come live EVERYDAY!</p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                    <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-5">
                  <div>
                    <h2 className={"news-title title-text text-[2.5rem] font-[600]"} style={{opacity: visibilityObject.c.title}}>Interactive Classes</h2>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.c.para}}>Chat with our teachers, take a quiz, learn!</p>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.c.para}}>Your learning style is ours too.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                    <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-5">
                  <div>
                    <h2 className={"blaze-title title-text text-[2.5rem] font-[600]"} style={{opacity: visibilityObject.d.title}}>Snap & Learn</h2>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.d.para}}>This is something out of a sci-fi movie!</p>
                    <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]" style={{opacity: visibilityObject.d.para}}>Snap and that&apos;s it, we will solve your doubts.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                    <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-800 h-[200px] w-full" />
    </main>
  )
}
