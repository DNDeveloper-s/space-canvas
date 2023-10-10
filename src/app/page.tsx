'use client'

import {useContext, useEffect, useRef, useState} from 'react';
import {useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll} from 'framer-motion';
import logowhite from '../assets/images/logo-white.webp';
import Image from 'next/image';
import {getLinearRateNew, runCanvasScript} from '@/helpers/canvas';
import {Simulate} from 'react-dom/test-utils';
import Typist from "react-typist-component";
import reset = Simulate.reset;
import {late, set} from 'zod';
import MobileViewSection from '@/app/MobileViewSection';
import LandingScrollSection from '@/app/LandingScrollSection';

const items = ['home', 'videos', 'news', 'blaze'];
let isSliderOpen = false;
export default function Home() {
  const [canPlay, setCanPlay] = useState(false);
  // const [showLandingPage, setShowLandingPage] = useContext(IntroContext).showLandingPage;
  const {scrollY} = useScroll();
  const [animateValue, setAnimateValue] = useState({transform: 1, opacity: 1, blur: 0, circleOpacity: 0, navBg: 0});
  const [opacityValue, setOpacityValue] = useState(1);
  const [typistKey, setTypistKey] = useState(1);
  // const [animateValue, setAnimateValue] = useState({transform: 1, opacity: 1});
  const startRGB = 'rgb(14, 21, 37)';
  const [RGB, setRGB] = useState([14, 21, 37]);
  const comp = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', latestValue => {
    if(!scrollSectionRef.current) return;
    console.log('latestValue - ', latestValue);
    {
      const transformVal = getLinearRateNew({
        desiredRange: {from: 1, to: 2.3},
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

      const offsetTop = scrollSectionRef.current.offsetTop;
      const range = {from: 200, to: offsetTop};

      const rVal = getLinearRateNew({
        desiredRange: {from: 14, to: 0},
        relativeRange: range,
        acc: latestValue
      });

      const gVal = getLinearRateNew({
        desiredRange: {from: 21, to: 0},
        relativeRange: range,
        acc: latestValue
      });

      const bVal = getLinearRateNew({
        desiredRange: {from: 37, to: 0},
        relativeRange: range,
        acc: latestValue
      });

      const circleOpacityVal = getLinearRateNew({
        desiredRange: {from: 0, to: 1},
        relativeRange: {from: 2250, to: 2500},
        acc: latestValue
      });

      const navBgVal = getLinearRateNew({
        desiredRange: {from: 0, to: 1},
        relativeRange: range,
        acc: latestValue
      });

      setAnimateValue({
        transform: transformVal,
        opacity: opacityVal,
        blur: blurVal,
        circleOpacity: circleOpacityVal,
        navBg: navBgVal
      })

      setOpacityValue(opacityVal);

      setRGB([rVal, gVal, bVal]);
    }
  });

  useEffect(() => {
    const canvasEl = document.getElementById('space-canvas');

    let regexp = /android|iphone|kindle|ipad/i;
    /* Using test() method to search regexp in details
    it returns boolean value*/
    let details = navigator.userAgent;
    let isMobileDevice = regexp.test(details);

    if(canvasEl) runCanvasScript(canvasEl, innerWidth, isMobileDevice ? screen.availHeight : innerHeight);
  }, [])

  return (
    <>
      <nav className="nav__wrapper" style={{background: `rgba(0,0,0,0)`}}>
            <span className="nav__logo">
              <Image height={100} width={100} className="nav__logo__img" src={logowhite} alt="Pustack Logo" />
              {/*<img*/}
              {/*  src={logowhite}*/}
              {/*  alt="Pustack Logo"*/}
              {/*  draggable={false}*/}
              {/*  className="nav__logo__img"*/}
              {/*  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}*/}
              {/*/>*/}
            </span>

        <span className="nav__links">
              {/*<a href="https://tutor.pustack.com">Tutor Login</a>*/}
          <span
            className="explore_classroom"
            style={{boxShadow: RGB[0] === 0 ? '0 0 32px #0079F2' : 'none', background: RGB[0] === 0 ? '#0079F2' : '#0053A6'}}
            onClick={() => {
              // setIsSliderOpen(true);
              // navigator && navigator.vibrate && navigator.vibrate(5);
              // setShowLandingPage(false);
              // history.push('/auth?step=login');
            }}
          >
                Access Classroom
              </span>
            </span>
      </nav>
      <div className="space-wars-bg" ref={comp} style={{filter: `blur(${animateValue.blur}px)`, opacity: RGB[0] === 0 ? 0 : 1}}>
        {/*<canvas id="space-canvas" style={{background: `rgb(${RGB.join(',')})`}}></canvas>*/}
        <div className="mac__text">
          <div style={{transformOrigin: '50% 80% 0px', opacity: opacityValue, transform: `scale(${animateValue.transform})`}}>
            <h2>Learning should be</h2>
            <h1 style={{
              position: 'relative'
            }}>
              <h1 style={{
                position: "relative",
                opacity: 0,
                pointerEvents: 'none'
              }}>intuitive</h1>
              <h1 style={{
                position: "absolute",
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {isSliderOpen ? (
                  "fun"
                ) : (
                  // <Typewriter
                  //   options={{
                  //     strings: ["intuitive", "fun", "accessible", "affordable"],
                  //     autoStart: true,
                  //     loop: true,
                  //     delay: 45,
                  //   }}
                  // />
                  <Typist
                    startDelay={0}
                    cursor={<span style={{color: 'white'}}>|</span>}
                    // cursor={{
                    // 	show: false,
                    // 	blink: false,
                    // 	element: "|",
                    // 	hideWhenDone: true,
                    // 	hideWhenDoneDelay: 500,
                    // }}
                    typingDelay={100}
                    loop={true}
                    key={typistKey}
                    onTypingDone={() => setTypistKey(c => c >= 4 ? 1 : c + 1)}
                  >
                    {[{text: "intuitive", color: '#7c69f3'},
                      {text: "fun", color: '#69cc7b'},
                      {text: "accessible", color: '#2490ff'},
                      {text: "affordable", color: '#d57a24'},
                    ].map(({text: word, color}) => [
                      <span key={word} style={{color}} className={word}>{word}</span>,
                      <Typist.Delay key={word} ms={2000} />,
                      <Typist.Backspace key={word} count={word.length}/>,
                    ])}
                  </Typist>
                )}
              </h1>
            </h1>
          </div>
          <div className="call__to__action" style={{opacity: opacityValue}}>
            <button
              className="start__learning__btn"
              onClick={() => {
                // setShowLandingPage(false);
                // setIsSliderOpen(true);
                // navigator && navigator.vibrate && navigator.vibrate(5);
              }}
            >
              Start Learning
            </button>
          </div>
          {/*onClick={() => {window.scrollTo(0, window.innerHeight * 1.9)}}*/}
          <div onClick={() => {
            const el = document.getElementById('landing-scroll-section');
            if(el) el.scrollIntoView();
          }} className="down__scroll__indicator cursor-pointer" style={{opacity: opacityValue}}>
            <svg
              width={32}
              height={32}
              fill="currentColor"
              aria-hidden="true"
              preserveAspectRatio="xMidYMin"
              style={{
                "--size": 32,
                "--rotate": "0deg",
              }}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 4.25a.75.75 0 0 1 .75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <main style={{scrollSnapType: 'y mandatory'}} className="pt-[120vh]">
        <div id={"landing-scroll-section"} ref={scrollSectionRef} className="h-[400vh] bg-black relative" style={{background: `rgb(${RGB.join(',')})`, boxShadow: `0 -64px 64px 32px rgb(${RGB.join(',')})`}}>
          <MobileViewSection />
        </div>
        <div className="bg-black relative" style={{scrollSnapAlign: 'start', width: '100%', height: 'auto', padding: '100px 0 150px'}}>
          <LandingScrollSection />
        </div>
        {/*<PustackFooter keepVisible/>*/}
      </main>
    </>
  )
}
// This app is excellent for study purpose. Here u are provided with many video lecture and live class as well. It follow NCERT. PuStack make easy to understand.
//   @Maitray Sinha
