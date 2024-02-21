'use client'

import {botData, ChatGPTRole, dummyUser} from '@/helpers';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';

const messageItem = `
Certainly! Here are 1000 words:

Humanity's journey through time is a tapestry woven with diverse experiences and aspirations. People traverse life's intricate path in pursuit of happiness, success, and meaning. This quest often takes them through the corridors of education, the avenues of work, and the intricate web of relationships. Communication, a fundamental thread in this tapestry, serves as the linchpin that connects individuals and facilitates the exchange of ideas.

In the modern era, technology has played a pivotal role in redefining how we communicate and interact with the world. The digital age has brought about unprecedented connectivity, enabling people from different corners of the globe to engage in real-time conversations, share information, and collaborate on a global scale. The internet, social media, and smartphones have become ubiquitous tools that have reshaped the way we engage with each other and the world at large.

Yet, even in this era of technological advancements, our global community faces pressing challenges that demand collective action. Climate change, a dire existential threat, requires nations and individuals to come together to mitigate its impact and transition to sustainable practices. Social inequalities persist, necessitating continued efforts to bridge the gaps that separate different segments of society. The importance of international cooperation and collaboration cannot be overstated as we confront these and other shared challenges.

Amid this backdrop of global issues, individuals engage in their personal quests for growth and self-improvement. This intrinsic drive, fueled by curiosity and determination, propels them to seek knowledge, develop new skills, and enhance their overall well-being. The journey of personal growth is a lifelong process, and it manifests in various forms, from formal education to self-help endeavors, each contributing to a broader tapestry of self-fulfillment.

Creativity and expression are woven into the fabric of human existence. Art, music, literature, and various forms of creative expression provide individuals with outlets to convey their emotions, thoughts, and perspectives. These creative endeavors reflect the multifaceted nature of human existence and connect people across time and space through shared cultural experiences. Artistic expression is a testament to the human spirit's need for creativity and its capacity to inspire and connect.

Nature, with its breathtaking beauty and complexity, stands as a source of inspiration and contemplation for many. From the serene vistas of pristine wilderness to the intricate ecosystems teeming with life, the natural world offers solace and wonder. It reminds us of our interconnectedness with the planet and our responsibility to protect and preserve it for future generations.

In the face of adversity, the human spirit has demonstrated remarkable resilience. Throughout history, individuals and communities have weathered trials and tribulations, emerging stronger and more united. The capacity to endure and adapt is an intrinsic part of our nature. It is through these challenges that we learn, grow, and evolve as a species, leaving an indelible mark on the course of human history.

Ultimately, the aspirations and pursuits of individuals shape the world in countless ways. Our collective actions ripple through time, influencing the course of history, shaping societies, and leaving legacies for future generations. Whether through scientific discoveries, artistic masterpieces, social movements, or acts of kindness, each individual's contributions are threads in the grand tapestry of human existence.

As we navigate the complexities of the 21st century, our ability to understand and appreciate this rich tapestry of human experience becomes increasingly important. Empathy, tolerance, and open-mindedness are essential in fostering harmony and cooperation on a global scale. By recognizing our shared humanity and respecting the diverse perspectives that color our world, we can work together to confront the challenges that lie ahead.

In conclusion, life is a tapestry woven from the threads of diverse experiences, aspirations, and interactions. As individuals, we journey through the labyrinth of existence, seeking happiness, success, and meaning. Communication, driven by technological advancements, connects us in ways previously unimaginable, enabling us to address global challenges like climate change and social inequality. Our pursuit of personal growth and self-improvement is a lifelong endeavor, while creativity and expression allow us to share our unique perspectives with the world. Nature inspires awe and reflection, and the human spirit's resilience in the face of adversity shapes our shared history. In the end, each individual's contributions form the mosaic of human existence, offering the potential for a better future through understanding, cooperation, and empathy.
`;

interface MessageItemProps {
	chunksRef?: React.MutableRefObject<string>,
	doneRef?: React.MutableRefObject<boolean>
	scrollContainerRef?: React.MutableRefObject<HTMLDivElement>
};


function RenderMessageItem({chunksRef, doneRef, scrollContainerRef}: MessageItemProps) {
	const [item, setItem] = useState('');
	const animationFrameRef = useRef<number>(0);
	const textContainerRef = useRef<HTMLDivElement>(null);
	const [markdownChunks, setMarkdownChunks] = useState<string[]>([]);
	const [renderedChunks, setRenderedChunks] = useState([]);
	const lastItemRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if(!doneRef || !chunksRef) return;

		let j = 0;
		let prevJ = 0;
		let frame = 0;
		// const interval = setInterval(, 200);
		function step() {
			if(!doneRef || !chunksRef) return;
			// Shift the cursor to next index when the chunks array has more chunks
			if(chunksRef.current.length >= j && frame === 15) {
				j += 25;
				frame = 0;

				const message = chunksRef.current.slice(prevJ, j);
				// textContainerRef.current.innerHTML += message;
				console.log('message - ', message);
				// processSSEChunk(message);
				setMarkdownChunks(c => [...c, message]);
			}
			// setItem(c => message);

			console.log('j for joy - ', j);

			// Clear the interval when the chunks array is done and the message is fully typed
			if(doneRef.current && chunksRef.current.length < j) {
				// clearInterval(interval);
				cancelAnimationFrame(animationFrameRef.current)
			}

			prevJ = j;
			frame += 1;
			animationFrameRef.current = requestAnimationFrame(step);
		}

		animationFrameRef.current = requestAnimationFrame(step);

		return () => {
			// clearInterval(interval);
			cancelAnimationFrame(animationFrameRef.current)
		}
	}, [chunksRef, doneRef]);

	useEffect(() => {
		setTimeout(() => {
			lastItemRef.current && lastItemRef.current.scrollIntoView({behavior: 'smooth'});
		})
	}, [markdownChunks])

	return (
		// <Markdown source={item} />
		// <HandleRenderMessageItem item={item} />
		<div>
			{markdownChunks.map((chunk, index) => (
				<span key={chunk}>{chunk}</span>
			))}
			<div ref={lastItemRef} />
		</div>
	);
}

function GeneratingMessageItem({scrollContainerRef}) {
	const chunksRef = useRef<string>(messageItem);
	const doneRef = useRef<boolean>(true);

	return (
		<div className="flex items-start">
			<p className="whitespace-pre-wrap text-[1em] text-primaryText text-opacity-60 flex-1">
				<RenderMessageItem scrollContainerRef={scrollContainerRef} chunksRef={chunksRef} doneRef={doneRef} />
				<span className="w-1 inline-block -mb-1.5 h-5 bg-primary cursor-blink"/>
			</p>
		</div>
	)
}

function ChatGPTMessageItem({messageItem, size = 45, scrollContainerRef, isGenerating = false, text = 'This is a normal text message'}: {messageItem: any, scrollContainerRef?: React.MutableRefObject<HTMLDivElement>, size?: number, isGenerating?: boolean, text?: string}) {
	return (
		<div key={messageItem.content} className={'w-full ' + (messageItem.role === ChatGPTRole.ASSISTANT ? '' : 'bg-black bg-opacity-30')}>
			<div className="flex items-start px-[1em] py-[0.9em] w-full max-w-[800px] mx-auto">
				<Image className="rounded-lg mr-[0.3em]" width={size} height={size} src={messageItem.role === ChatGPTRole.ASSISTANT ? botData.image : dummyUser.image} alt=""/>
				<div className="ml-[0.8em] flex-1">
					{isGenerating ? <GeneratingMessageItem scrollContainerRef={scrollContainerRef}/> : (
						<div className="flex items-start">
							<p className="whitespace-pre-wrap text-[1em] text-primaryText text-opacity-60 flex-1">
								{text}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

const messages = [
	'Sure! Before I can provide you with a strategy, I need to know a bit more about your business. Can you please tell me your name, profession, and what your business is about?',
	'Hello! How can I assist you today?',
	'Great! Can you please tell me what your business is about?',
	'Hi, I am John Doe, I am a photographer and I run a photography business.',
	'Hey there?',
]

export default function Home() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	return (
		<div className="w-full flex max-w-[1000px] mx-auto h-screen bg-gray-300">
			<div className={'flex-1 flex flex-col-reverse overflow-auto'} ref={scrollContainerRef}>
				<ChatGPTMessageItem messageItem={{
					content: 'Hey',
					role: ChatGPTRole.ASSISTANT,
					id: '1',
				}} isGenerating />
				{messages.map((message, ind) => (
					<ChatGPTMessageItem key={message} messageItem={{
						content: 'Hey',
						role: ind % 2 !== 0 ? ChatGPTRole.ASSISTANT : ChatGPTRole.USER,
						id: '1'
					}} text={message} scrollContainerRef={scrollContainerRef} />
				))}
				<div className="w-full max-w-[900px] mx-auto px-3 flex justify-center items-center my-3">
					<div className="h-0.5 mr-5 flex-1 bg-gray-800" />
					<div className="flex justify-center items-center font-light text-sm font-diatype text-white text-opacity-50">
						<span>Hey</span>
						<span>, How can Arti Ai help you?</span>
					</div>
					<div className="h-0.5 ml-5 flex-1 bg-gray-800" />
				</div>
			</div>
		</div>
	)
}
