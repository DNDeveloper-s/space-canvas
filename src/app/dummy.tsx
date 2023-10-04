import Image from 'next/image';
import Iphone2 from '@/assets/images/iPhone2.png';
import Live from '@/assets/images/live.png';
import GooglePlay from '@/assets/images/google-play.svg';
import AppStore from '@/assets/images/app-store.svg';

export default function Dummy() {

	return (

		<div className="relative w-screen h-full top-0 flex justify-between items-center left-0 z-50">
			<div ref={homeRefBg} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 home-bg w-[80%] h-[80%]" />
			<div ref={videoRefBg} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 video-bg w-[80%] h-[80%]" />
			<div ref={newsRefBg} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 news-bg w-[80%] h-[80%]" />
			<div ref={blazeRefBg} className="absolute top-1/2 left-1/2 transform rounded-full -translate-x-1/2 -translate-y-1/2 blaze-bg w-[80%] h-[80%]" />
			<div className={"w-full h-full backdrop-blur-[400px] absolute top-0 left-0"} />
			<div className="w-[90%] relative h-full flex justify-between max-w-6xl mx-auto">
				<div className="sticky top-1/2 left-20 transform -translate-y-1/2 w-[270px] h-auto">
					<Image className="absolute top-0 relative w-full" src={Iphone2} alt="Iphone" />
					<Image ref={homeRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclass.webp" alt="Learning" />
					<Image ref={videoRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src={Live} alt="Learning" />
					<Image ref={newsRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/liveclassvideo.webp" alt="Learning" />
					<Image ref={blazeRefImage} className="absolute top-1/2 rounded-3xl left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-[234px]" width={400} height={800} src="https://d1kjns6e6wnqfd.cloudfront.net/snap.webp" alt="Learning" />
				</div>
				<div className="relative flex-1 max-w-[300px]">
					<div className="relative w-full h-full flex flex-col justify-center items-start gap-5">
						<div>
							<h2 ref={homeRef} className={"home-title title-text text-[2.5rem] font-[600]"}>Comprehensive Learning</h2>
							<p ref={homeRef1} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Every topic. Every concept. Every question.</p>
							<p ref={homeRef2} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">India&apos;s most driven teachers have covered it all!</p>
						</div>
						<div className="flex items-center gap-4 mt-10">
							<Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
							<Image className="h-10 w-auto" src={AppStore} alt="App Store" />
						</div>
					</div>
					<div className="relative w-full h-full flex flex-col justify-center items-start gap-5">
						<div>
							<h2 ref={videoRef} className={"videos-title title-text text-[2.5rem] font-[600]"}>Daily Live Classes</h2>
							<p ref={videoRef1} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Being consistent is the key to success.</p>
							<p ref={videoRef2} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">So we come live EVERYDAY!</p>
						</div>
						<div className="flex items-center gap-4 mt-10">
							<Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
							<Image className="h-10 w-auto" src={AppStore} alt="App Store" />
						</div>
					</div>
					<div className="relative w-full h-full flex flex-col justify-center items-start gap-5">
						<div>
							<h2 ref={newsRef} className={"news-title title-text text-[2.5rem] font-[600]"}>Interactive Classes</h2>
							<p ref={newsRef1} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Chat with our teachers, take a quiz, learn!</p>
							<p ref={newsRef2} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Your learning style is ours too.</p>
						</div>
						<div className="flex items-center gap-4 mt-10">
							<Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
							<Image className="h-10 w-auto" src={AppStore} alt="App Store" />
						</div>
					</div>
					<div className="relative w-full h-full flex flex-col justify-center items-start gap-5">
						<div>
							<h2 ref={blazeRef} className={"blaze-title title-text text-[2.5rem] font-[600]"}>Snap & Learn</h2>
							<p ref={blazeRef1} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">This is something out of a sci-fi movie!</p>
							<p ref={blazeRef2} className="pt-[5px] text-[1.25rem] text-white tracking-[1px]">Snap and that&apos;s it, we will solve your doubts.</p>
						</div>
						<div className="flex items-center gap-4 mt-10">
							<Image className="h-10 w-auto" src={GooglePlay} alt="Google Play" />
							<Image className="h-10 w-auto" src={AppStore} alt="App Store" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
