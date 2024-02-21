'use client'

import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
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

import * as Comlink from "comlink";
import { WorkerApi } from '@/workers/comlink.worker';

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

	// For Comlink
	const [comlinkMessage, setComlinkMessage] = React.useState("");
	const workerRef = React.useRef<Worker>();

	useEffect(() => {
		// Comlink worker
		workerRef.current = new Worker(new URL('../workers/comlink.worker.ts', import.meta.url))
		workerRef.current.onmessage = (event: MessageEvent<number>) => {
			console.log('event - ', event);
			// alert(`WebWorker Response => ${event.data}`)
		}
		return () => {
			workerRef.current?.terminate()
		}
	}, [])

	const handleWork = useCallback(async () => {
		workerRef.current?.postMessage({
			type: "start",
			value: 1,
		})
	}, [])


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
		<canvas id="space-canvas" style={{background: `rgb(${RGB.join(',')})`}}></canvas>
	)
}
// This app is excellent for study purpose. Here u are provided with many video lecture and live class as well. It follow NCERT. PuStack make easy to understand.
//   @Maitray Sinha
