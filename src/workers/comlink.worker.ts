// Needed to declare this as a module. Also shows that imports
// function normally in workers.
// const ctx: Worker = self as unknown as Worker;
//
// async function start() {
// 	ctx.postMessage({
// 		type: 'tsData',
// 		data: {name: 'Saurabh Singh'},
// 	});
// }
//
// ctx.addEventListener('message', (evt) => {
// 	switch (evt.data.type) {
// 		case 'start':
// 			start();
// 			return;
// 	}
// });


import {expose} from "comlink";

export interface WorkerApi {
	getName: typeof getName;
}

const workerApi: WorkerApi = {
	getName,
};

async function getName() {
	// const res = await fetch(
	// 	"https://random-word-api.herokuapp.com/word?number=1"
	// );
	// const json = await res.json();
	return 'Thanks to me';
}

expose(workerApi);
