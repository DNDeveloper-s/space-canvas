import React, {useEffect, useRef, useState} from 'react';

import Iphone2 from '../assets/images/iPhone2.png';
import Live from '../assets/images/live.png';
import AppStoreSVG from '../assets/images/app-store.svg';
import GooglePlaySVG from '../assets/images/google-play.svg';
import Image from 'next/image';
// import {appAppleLink, appGooglePlayLink} from "../helpers";
import Link from 'next/link';


const items = ['home', 'videos', 'news', 'blaze'];
export default function MobileViewSection() {
	const [activeItem, setActiveItem] = useState<string | null>('home');
	const stopRef = useRef(false);

	function handleActiveItem(item: string | null) {
		setActiveItem(item);
		stopRef.current = true;
	}

	function handleItemMouseLeave() {
		stopRef.current = false;
	}

	useEffect(() => {
		let options = {
			//   root: document.body,
			//   rootMargin: "0px",
			threshold: [0, 0.25, 0.4, 0.6, 0.75, 1],
		};
		let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			// const isNotIntersecting = entries.every((entry) => entry.intersectionRatio === 0);
			// console.log('entries - ', entries);
			// if(isNotIntersecting) {
			// 	console.log('setting active item - ', activeItem === 'blaze' ? 'blaze' : 'home', entries, entries.map(entry => entry.intersectionRatio));
			// 	setActiveItem(c => c === 'blaze' ? 'blaze' : 'home');
			// 	return;
			// }

			entries.forEach((entry) => {
				// console.log('entry - ', entry.target.dataset.item, (entry.intersectionRatio * 100).toFixed(2));
				const ratio = entry.intersectionRatio * 100;

				// If ratio > 00 amd less than 25, then set Active item to the data-item of the entry

				if(ratio > 60) {
					console.log('setting active item - ', entry.target.dataset.item, (entry.intersectionRatio * 100).toFixed(2));
					setActiveItem(entry.target.dataset.item);
				}

				// If ratio === 0 and the data-item of the entry is video, then set Active item to home
				// else if(ratio === 0 && entry.target.dataset.item === 'videos') {
				// 	setActiveItem('home');
				// }

				// Each entry describes an intersection change for one observed
				// target element:
				//   entry.boundingClientRect
				//   entry.intersectionRatio
				//   entry.intersectionRect
				//   entry.isIntersecting
				//   entry.rootBounds
				//   entry.target
				//   entry.time
			});
		};

		let observer = new IntersectionObserver(callback, options);

		const containers = document.querySelectorAll(".text-content-container");
		containers.forEach((container) => {
			observer.observe(container);
		});

		return () => {
			observer.disconnect();
		};
	}, [])

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		const currentItemIndex = items.findIndex(item => item === activeItem);
	// 		if(stopRef.current) return;
	// 		setActiveItem(items[currentItemIndex + 1] || 'home');
	// 	}, 5000);
	// 	return () => clearInterval(interval);
	// }, [activeItem])

	return (
		<>
			<div className="sticky top-0 left-0 flex flex-col justify-center items-center h-auto min-h-screen p-10 py-16 w-screen">
				<div style={{opacity: activeItem === 'home' ? 1 : 0}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 home-bg w-full md:w-[40%] h-[40%]" />
				<div style={{opacity: activeItem === 'videos' ? 1 : 0}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 video-bg w-full md:w-[40%] h-[40%]" />
				<div style={{opacity: activeItem === 'news' ? 1 : 0}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 news-bg w-full md:w-[40%] h-[40%]" />
				<div style={{opacity: activeItem === 'blaze' ? 1 : 0}} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 blaze-bg w-full md:w-[40%] h-[40%]" />
				<div className={"w-full h-full backdrop-blur-[250px] absolute top-0 left-0"} />
				<div className="flex flex-col md:flex-row relative px-10 gap-20 items-center w-screen justify-center">
					<div className="z-50 relative flex gap-10 flex-col justify-between">
						<div onMouseOver={() => handleActiveItem('home')} onMouseLeave={handleItemMouseLeave} className={'landing-mobile-content-card cursor-pointer ' + (activeItem === 'home' ? ' active' : '')}>
							<h2 className="title-text-landing-page home-title text-[1.25rem] font-[600]">Comprehensive Learning</h2>
							<p className="pt-2 text-[0.85rem] text-white tracking-[1px]">Every topic. Every concept. Every question.</p>
							<p className="pt-0.5 text-[0.85rem] text-white tracking-[1px]">India&apos;s most driven teachers have covered it all!</p>
						</div>
						<div onMouseOver={() => handleActiveItem('videos')} onMouseLeave={handleItemMouseLeave} className={'landing-mobile-content-card cursor-pointer ' + (activeItem === 'videos' ? ' active' : '')}>
							<h2 className="title-text-landing-page videos-title text-[1.25rem] font-[600]">Daily Live Classes</h2>
							<p className="pt-2 text-[0.85rem] text-white tracking-[1px]">Being consistent is the key to success.</p>
							<p className="pt-0.5 text-[0.85rem] text-white tracking-[1px]">So we come live EVERYDAY!</p>
						</div>
						<div onMouseOver={() => handleActiveItem('news')} onMouseLeave={handleItemMouseLeave} className={'landing-mobile-content-card cursor-pointer ' + (activeItem === 'news' ? ' active' : '')}>
							<h2 className="title-text-landing-page news-title text-[1.25rem] font-[600]">Interactive Classes</h2>
							<p className="pt-2 text-[0.85rem] text-white tracking-[1px]">Chat with our teachers, take a quiz, learn!</p>
							<p className="pt-0.5 text-[0.85rem] text-white tracking-[1px]">Your learning style is ours too.</p>
						</div>
						<div onMouseOver={() => handleActiveItem('blaze')} onMouseLeave={handleItemMouseLeave} className={'landing-mobile-content-card cursor-pointer ' + (activeItem === 'blaze' ? ' active' : '')}>
							<h2 className="title-text-landing-page blaze-title text-[1.25rem] font-[600]">Snap & Learn</h2>
							<p className="pt-2 text-[0.85rem] text-white tracking-[1px]">This is something out of a sci-fi movie!</p>
							<p className="pt-0.5 text-[0.85rem] text-white tracking-[1px]">Snap and that&apos;s it, we will solve your doubts.</p>
						</div>
					</div>
					<div className="relative w-[300px] h-auto">
						<Image className="relative w-full" src={Iphone2} alt="Iphone" />
						<Image style={{opacity: activeItem === 'home' ? 1 : 0}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[261px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclass.webp" alt="Learning" />
						<Image style={{opacity: activeItem === 'videos' ? 1 : 0}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[261px]" width={400} height={800} src={Live} alt="Learning" />
						<Image style={{opacity: activeItem === 'news' ? 1 : 0}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[261px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclassvideo.webp" alt="Learning" />
						<Image style={{opacity: activeItem === 'blaze' ? 1 : 0}} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[261px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/snap.webp" alt="Learning" />
					</div>
				</div>
				<div className="mt-14 flex relative gap-8 justify-center items-center">
					<Link href={'#'} target="_blank">
						<Image className="h-12 w-auto" src={GooglePlaySVG} alt="Google Play Store" />
					</Link>
					<Link href={'#'} target="_blank">
						<Image className="h-12 w-auto" src={AppStoreSVG} alt="App Store" />
					</Link>
				</div>
			</div>
			<div className="absolute top-0 w-screen h-screen">
				<div data-item={'home'} className="text-content-container h-screen bg-yellow-500 bg-opacity-0">
				</div>
				<div data-item={'videos'} className="text-content-container h-screen bg-red-500 bg-opacity-0" />
				<div data-item={'news'} className="text-content-container h-screen bg-blue-500 bg-opacity-0" />
				<div data-item={'blaze'} className="text-content-container h-screen bg-green-500 bg-opacity-0" />
			</div>
		</>
	)
}
