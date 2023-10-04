'use client'

import {useEffect, useRef, useState} from 'react';
import {useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll} from 'framer-motion';
import Iphone2 from '../assets/images/iPhone2.png';
import Live from '../assets/images/live.png';
import AppStore from '../assets/images/app-store.svg';
import GooglePlay from '../assets/images/google-play.svg';
import Image from 'next/image';
import {LinearRateOptions} from '@/helpers/canvas';
import {Simulate} from 'react-dom/test-utils';
import reset = Simulate.reset;
import {late} from 'zod';

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
  const scrollYRef = useRef<number>(0)
  const isFast = useRef(false);

  const homeRefBg = useRef<HTMLDivElement>(null);
  const homeRefImage = useRef<HTMLImageElement>(null);
  const homeRef = useRef<HTMLHeadingElement>(null);
  const homeRef1 = useRef<HTMLParagraphElement>(null);
  const homeRef2 = useRef<HTMLParagraphElement>(null);

  const videoRefBg = useRef<HTMLDivElement>(null);
  const videoRefImage = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLHeadingElement>(null);
  const videoRef1 = useRef<HTMLParagraphElement>(null);
  const videoRef2 = useRef<HTMLParagraphElement>(null);

  const newsRefBg = useRef<HTMLDivElement>(null);
  const newsRefImage = useRef<HTMLImageElement>(null);
  const newsRef = useRef<HTMLHeadingElement>(null);
  const newsRef1 = useRef<HTMLParagraphElement>(null);
  const newsRef2 = useRef<HTMLParagraphElement>(null);

  const blazeRefBg = useRef<HTMLDivElement>(null);
  const blazeRefImage = useRef<HTMLImageElement>(null);
  const blazeRef = useRef<HTMLHeadingElement>(null);
  const blazeRef1 = useRef<HTMLParagraphElement>(null);
  const blazeRef2 = useRef<HTMLParagraphElement>(null);

  useMotionValueEvent(scrollY, 'change', latestValue => {

    console.log('latestValue - ', latestValue);

    const innerHeight = window.innerHeight;
    let init = innerHeight + 500;
    let acc = innerHeight / 1.3;

    if(!homeRefBg.current || !homeRefImage.current) return;
    if(!videoRefBg.current || !videoRefImage.current) return;
    if(!newsRefBg.current || !newsRefImage.current) return;
    if(!blazeRefBg.current || !blazeRefImage.current) return;


    // if(!homeRef.current || !homeRefBg.current || !homeRefImage.current || !homeRef1.current || !homeRef2.current) return;
    // if(!videoRef.current || !videoRefBg.current || !videoRefImage.current || !videoRef1.current || !videoRef2.current) return;
    // if(!newsRef.current || !newsRefBg.current || !newsRefImage.current || !newsRef1.current || !newsRef2.current) return;
    // if(!blazeRef.current || !blazeRefBg.current || !blazeRefImage.current || !blazeRef1.current || !blazeRef2.current) return;


    if(latestValue < init) {
      let a ={
        bg: 1,
        // title: 1,
        // para: 1,
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

      if(latestValue > init-50) {
        // a.title = a.para = getLinearRateNew({
        //   desiredRange: {from: 0.9999, to: 0},
        //   relativeRange: {from: init-50, to: init},
        //   acc: latestValue
        // });
        if(latestValue > init) a.bg = a.title = a.para = 0;
        else a.bg = a.title = a.para = 1;

        // a.bg = getLinearRateNew({
        //   desiredRange: {from: 0.9999, to: 0},
        //   relativeRange: {from: init-50, to: init},
        //   acc: latestValue
      }

      // setVisibilityObject(c => ({
      //   a,
      //   b: resetObj,
      //   c: resetObj,
      //   d: resetObj
      // }))
      // homeRef.current.style.opacity = a.title.toString();
      homeRefBg.current.style.opacity = a.bg.toString();
      homeRefImage.current.style.opacity = a.bg.toString();
      // homeRef1.current.style.opacity = a.para.toString();
      // homeRef2.current.style.opacity = a.para.toString();

      // videoRef.current.style.opacity = '0';
      videoRefBg.current.style.opacity = '0';
      videoRefImage.current.style.opacity = '0';
      // videoRef1.current.style.opacity = '0';
      // videoRef2.current.style.opacity = '0';

      // newsRef.current.style.opacity = '0';
      newsRefBg.current.style.opacity = '0';
      newsRefImage.current.style.opacity = '0';
      // newsRef1.current.style.opacity = '0';
      // newsRef2.current.style.opacity = '0';

      // blazeRef.current.style.opacity = '0';
      blazeRefBg.current.style.opacity = '0';
      blazeRefImage.current.style.opacity = '0';
      // blazeRef1.current.style.opacity = '0';
      // blazeRef2.current.style.opacity = '0';
    }
    if(latestValue > init && latestValue < init+acc) {
      let b = {
        bg: 1,
        // title: 1,
        // para: 1,
        image: 1
      }


      // b.bg = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // b.title = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // b.para = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init+40, to: init+100},
      //   acc: latestValue
      // });
      //
      //
      // if(latestValue > init+acc-50) {
      //   b.title = b.para = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: init+acc-50, to: init+acc},
      //     acc: latestValue
      //   });
      //
      //   b.bg = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: init+acc-50, to: init+acc},
      //     acc: latestValue
      //   });
      //   // init = init+500;
      // }

      // homeRef.current.style.opacity = '0'
      homeRefBg.current.style.opacity = '0'
      homeRefImage.current.style.opacity = '0'
      // homeRef1.current.style.opacity = '0'
      // homeRef2.current.style.opacity = '0'

      // videoRef.current.style.opacity = b.title.toString();
      videoRefBg.current.style.opacity = b.bg.toString();
      videoRefImage.current.style.opacity = b.bg.toString();
      // videoRef1.current.style.opacity = b.para.toString();
      // videoRef2.current.style.opacity = b.para.toString();

      // newsRef.current.style.opacity = '0';
      newsRefBg.current.style.opacity = '0';
      newsRefImage.current.style.opacity = '0';
      // newsRef1.current.style.opacity = '0';
      // newsRef2.current.style.opacity = '0';

      // blazeRef.current.style.opacity = '0';
      blazeRefBg.current.style.opacity = '0';
      blazeRefImage.current.style.opacity = '0';
      // blazeRef1.current.style.opacity = '0';
      // blazeRef2.current.style.opacity = '0';

      // setVisibilityObject(c => ({
      //   a: resetObj,
      //   b,
      //   c: resetObj,
      //   d: resetObj
      // }))
    }

    if(latestValue > init+acc && latestValue < init + (acc * 2.5)) {
      init = init+acc;
      let c = {
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      // if(latestValue > init && latestValue < init + acc) c.bg = c.title = c.para = 1;
      // else c.bg = c.title = c.para = 0;
      // c.bg = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // c.title = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // c.para = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init+40, to: init+100},
      //   acc: latestValue
      // });
      //
      //
      // if(latestValue > init+acc-50) {
      //   c.title = c.para = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: init+acc-50, to: init+acc},
      //     acc: latestValue
      //   });
      //
      //   c.bg = getLinearRateNew({
      //     desiredRange: {from: 0.9999, to: 0},
      //     relativeRange: {from: init+acc-50, to: init+acc},
      //     acc: latestValue
      //   });
      // }

      // homeRef.current.style.opacity = '0'
      homeRefBg.current.style.opacity = '0'
      homeRefImage.current.style.opacity = '0'
      // homeRef1.current.style.opacity = '0'
      // homeRef2.current.style.opacity = '0'

      // videoRef.current.style.opacity = '0';
      videoRefBg.current.style.opacity = '0';
      videoRefImage.current.style.opacity = '0';
      // videoRef1.current.style.opacity = '0';
      // videoRef2.current.style.opacity = '0';

      // newsRef.current.style.opacity = c.title.toString();
      newsRefBg.current.style.opacity = c.bg.toString();
      newsRefImage.current.style.opacity = c.bg.toString();
      // newsRef1.current.style.opacity = c.para.toString();
      // newsRef2.current.style.opacity = c.para.toString();

      // blazeRef.current.style.opacity = '0';
      blazeRefBg.current.style.opacity = '0';
      blazeRefImage.current.style.opacity = '0';
      // blazeRef1.current.style.opacity = '0';
      // blazeRef2.current.style.opacity = '0';

      // setVisibilityObject(_c => ({
      //   a: resetObj,
      //   b: resetObj,
      //   c,
      //   d: resetObj
      // }))
    }
    //
    if(latestValue > init + (acc * 2.5)) {
      init = init + (acc * 2);
      let d = {
        bg: 1,
        title: 1,
        para: 1,
        image: 1
      }
      // if(latestValue > init) d.bg = d.title = d.para = 1;
      // else c.bg = c.title = c.para = 0;
      // d.bg = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // d.title = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init, to: init+50},
      //   acc: latestValue
      // });
      // d.para = getLinearRateNew({
      //   desiredRange: {from: 0, to: 0.9999},
      //   relativeRange: {from: init+40, to: init+100},
      //   acc: latestValue
      // });


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


      // homeRef.current.style.opacity = '0'
      homeRefBg.current.style.opacity = '0'
      homeRefImage.current.style.opacity = '0'
      // homeRef1.current.style.opacity = '0'
      // homeRef2.current.style.opacity = '0'

      // videoRef.current.style.opacity = '0';
      videoRefBg.current.style.opacity = '0';
      videoRefImage.current.style.opacity = '0';
      // videoRef1.current.style.opacity = '0';
      // videoRef2.current.style.opacity = '0';

      // newsRef.current.style.opacity = '0';
      newsRefBg.current.style.opacity = '0';
      newsRefImage.current.style.opacity = '0';
      // newsRef1.current.style.opacity = '0';
      // newsRef2.current.style.opacity = '0';

      // blazeRef.current.style.opacity = d.title.toString();
      blazeRefBg.current.style.opacity = d.bg.toString();
      blazeRefImage.current.style.opacity = d.bg.toString();
      // blazeRef1.current.style.opacity = d.para.toString();
      // blazeRef2.current.style.opacity = d.para.toString();


      // setVisibilityObject(_c => ({
      //   a: resetObj,
      //   b: resetObj,
      //   c: resetObj,
      //   d
      // }))
    }
  })

  useEffect(() => {
    function handleScroll(e: Event) {
      if(e.currentTarget) {
        scrollYRef.current = e.currentTarget.scrollY;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <main>
      <div className="w-screen h-screen bg-white" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}} />
      <div className="w-screen h-[400vh]">
        <div className="w-screen relative max-w-[800px] mx-auto flex justify-between h-full">
          <div className="h-screen sticky top-0 flex justify-center items-center w-[270px] z-50">
            <Image className="relative top-0 w-full" src={Iphone2} alt="Iphone" />
            <Image ref={homeRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclass.webp" alt="Learning" />
            <Image ref={videoRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src={Live} alt="Learning" />
            <Image ref={newsRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclassvideo.webp" alt="Learning" />
            <Image ref={blazeRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/snap.webp" alt="Learning" />
          </div>
          <div className="absolute left-1/2 w-screen h-full top-0 -translate-x-1/2">
            <div className="sticky w-screen h-screen top-0 left-0 flex justify-center items-center">
              <div ref={homeRefBg} className="rounded-full home-bg w-[80%] h-[80vh]" />
            </div>
          </div>
          <div className="absolute left-1/2 w-screen h-full top-0 -translate-x-1/2">
            <div className="sticky w-screen h-screen top-0 left-0 flex justify-center items-center">
              <div ref={videoRefBg} className="rounded-full video-bg w-[80%] h-[80vh]" />
            </div>
          </div>
          <div className="absolute left-1/2 w-screen h-full top-0 -translate-x-1/2">
            <div className="sticky w-screen h-screen top-0 left-0 flex justify-center items-center">
              <div ref={newsRefBg} className="rounded-full news-bg w-[80%] h-[80vh]" />
            </div>
          </div>
          <div className="absolute left-1/2 w-screen h-full top-0 -translate-x-1/2">
            <div className="sticky w-screen h-screen top-0 left-0 flex justify-center items-center">
              <div ref={blazeRefBg} className="rounded-full blaze-bg w-[80%] h-[80vh]" />
              <div className={"w-full h-screen backdrop-blur-[400px] absolute top-0 left-0"} />
            </div>
          </div>
          {/*<div className="absolute w-screen h-full flex justify-center top-0 transform">*/}
          {/*  <div ref={videoRefBg} className="sticky top-1/2 transform -translate-y-1/2 rounded-full video-bg w-[80%] h-[80vh]" />*/}
          {/*</div>*/}
          {/*<div className="absolute w-screen h-full flex justify-center top-0 transform">*/}
          {/*  <div ref={newsRefBg} className="sticky top-1/2 transform -translate-y-1/2 rounded-full news-bg w-[80%] h-[80vh]" />*/}
          {/*</div>*/}
          {/*<div className="absolute w-screen h-full flex justify-center top-0 transform">*/}
          {/*  <div ref={blazeRefBg} className="sticky top-1/2 transform -translate-y-1/2 rounded-full blaze-bg w-[80%] h-[80vh]" />*/}
          {/*</div>*/}
          <div className={"z-50"}>
            <div className="h-screen flex flex-col justify-center items-start gap-5" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
              <div>
                <h2 className={"home-title title-text text-[2.5rem] font-[600]"}>Comprehensive Learning</h2>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Every topic. Every concept. Every question.</p>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">India&apos;s most driven teachers have covered it all!</p>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
              </div>
            </div>
            <div className="h-screen flex flex-col justify-center items-start gap-5" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
              <div>
                <h2 className={"videos-title title-text text-[2.5rem] font-[600]"}>Daily Live Classes</h2>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Being consistent is the key to success.</p>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">So we come live EVERYDAY!</p>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
              </div>
            </div>
            <div className="h-screen flex flex-col justify-center items-start gap-5" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
              <div>
                <h2 className={"news-title title-text text-[2.5rem] font-[600]"}>Interactive Classes</h2>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Chat with our teachers, take a quiz, learn!</p>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Your learning style is ours too.</p>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
              </div>
            </div>
            <div className="h-screen flex flex-col justify-center items-start gap-5" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
              <div>
                <h2 className={"blaze-title title-text text-[2.5rem] font-[600]"}>Snap & Learn</h2>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">This is something out of a sci-fi movie!</p>
                <p className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Snap and that&apos;s it, we will solve your doubts.</p>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
                <Image className="h-10 w-auto" src={AppStore} alt="App Store" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-800 h-[200px] w-full" style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}} />
    </main>
  )
}
