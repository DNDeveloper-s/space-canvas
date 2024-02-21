'use client';

import {Remote, wrap} from 'comlink';
import {WorkerApi} from '@/workers/comlink.worker';
import {useEffect, useRef} from 'react';
import * as Comlink from 'comlink';

// Use dynamic import to load the worker on the client side
// const Worker = dynamic(() => import('../workers/comlink.worker'), {
// 	ssr: false, // Ensure it doesn't run on the server
// });

export default function Home() {
	const workerRef = useRef<Worker>();
	const workerApiRef = useRef<Remote<WorkerApi>>();

	useEffect(() => {
		workerRef.current = new Worker(new URL("../workers/comlink.worker", import.meta.url));

		// workerRef.current = new Worker("../workers/comlink.worker", {
		// 	type: "module",
		// });
		// const Comlink = require('comlink');
		workerApiRef.current = Comlink.wrap<WorkerApi>(
			workerRef.current
		);
	}, [])

	const handleComlinkWork = async () => {
		const msg = await workerApiRef.current?.getName();
		console.log('msg - ', msg);
	};

	return (
		<div>
			<h1 className="text-2xl font-bold">Hello World</h1>
			<button onClick={() => handleComlinkWork()}>Log something</button>
		</div>
	);
}
