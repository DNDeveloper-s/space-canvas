'use client';

import React, {useCallback, useEffect, useState} from 'react';

const _items = [{id: '1', serialOrder: 0}, {id: '2', serialOrder: 1}, {id: '3', serialOrder: 2}, {id: '4', serialOrder: 3}, {id: '5', serialOrder: 4}];

const videoUrl = 'https://vz-17e20ade-426.b-cdn.net/eb48619c-c46c-48f1-9ba1-dc008cb1fcaa/play_240p.mp4'

function StoryItem({position, isActive, item}: {position: number, isActive: boolean, item: typeof _items[0]}) {
	return (
		<div className="absolute w-[300px] h-full top-0 bg-white transition-transform" style={{transform: `translateX(calc(${position}px - 50%)) scale(${isActive ? 1 : 0.4})`}} key={item.id}>
			<video src={videoUrl} className="w-full h-full" controls={false} autoPlay={true}>

			</video>
		</div>
	)
}

export default function Home() {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [cursor, setCursor] = React.useState(0);
	const [positions, setPositions] = useState<number[] | null>(null);
	const [items, setItems] = useState(_items);

	const calculatePosition = useCallback((cursor: number) => {
		const middleX = calculateMiddleX();
		const difference = 300;
		const position = [];
		for(let i = 0; i < items.length; i++) {
			const ind = (i - cursor) // 1, 2
			const index = ind * difference; // 200 // 400
			position.push(middleX + (ind === 0 ? 0 : index - (ind + (ind < 0 ? 1 : -1)) * 100)); // 200
		}
		return position;
	}, [items]);

	function calculateMiddleX() {
		if(!containerRef.current) {
			console.error('containerRef.current is null')
			return 0;
		}
		const rect = containerRef.current.getBoundingClientRect();
		return rect.width / 2;
	}

	useEffect(() => {
		// Calculate middleX
		const pos = calculatePosition(cursor);
		console.log('pos - ', pos);
		setPositions(pos);
	}, [calculatePosition, cursor]);

	function handleNext() {
		setCursor(c => {
			const newIndex = c + 1;
			if(newIndex >= items.length) {
				return c;
			}
			return newIndex;
		});
	}

	function handlePrev() {
		setCursor(c => {
			const newIndex = c - 1;
			if(newIndex < 0) {
				return c;
			}
			return newIndex;
		});
	}

	function handleDelete() {
		setItems(items => {
			if(items.length - 1 === cursor) {
				setCursor(c => c - 1);
			}
			return items.filter((item, i) => i !== cursor);
		});
	}

	return (
		<div className={"w-screen h-screen bg-black"}>
			<div className="flex gap-2 absolute top-4 left-1/2 transform -translate-x-1/2">
				<button className="bg-red-500 text-white" onClick={handlePrev}>Prev</button>
				<button className="bg-red-500 text-white" onClick={handleNext}>Next</button>
				<button className="bg-red-500 text-white" onClick={handleDelete}>Delete</button>
			</div>
			<div ref={containerRef} className="w-full h-[600px] absolute top-1/2 left-0 transform -translate-y-1/2">
				{positions && items.map((item, i) => (
					<StoryItem item={item} position={positions[i]} isActive={cursor === i} key={item.id} />
				))}
			</div>
		</div>
	)
}
