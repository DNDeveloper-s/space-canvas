import {scroll} from 'framer-motion';

interface Coords {
	x: number;
	y: number;
}

type Velocity = Coords;

function randomIntFromInterval(min: number, max: number) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}


interface Range {
	from: number;
	to: number;
}

interface LinearRateOptions {
	desiredRange: Range;
	relativeRange: Range;
	acc: number;
}

function getLinearRate(startBase: number, endBase: number, startAcc: number, endAcc: number, latestValue: number) {
	if(latestValue < startBase) return startAcc;
	const x = (startAcc - endAcc) / (startBase - endBase);
	let val = x * (latestValue) + 1;
	if(endAcc > startAcc && val >= Math.max(startAcc, endAcc)) return Math.max(startAcc, endAcc);
	if(endAcc < startAcc && val <= Math.min(startAcc, endAcc)) return Math.min(startAcc, endAcc);
	return val;
}


export function getLinearRateNew(options: LinearRateOptions) {
	const x = (options.desiredRange.from - options.desiredRange.to) / (options.relativeRange.from - options.relativeRange.to);
	const y = options.desiredRange.to - (options.relativeRange.to * x);
	let val = (options.acc * x) + y;
	if(options.acc < options.relativeRange.from) val = options.desiredRange.from;
	if(options.acc > options.relativeRange.to) val = options.desiredRange.to;
	return val;
}


// function getLinearRate(startBase: number, endBase: number, startAcc: number, endAcc: number, latestValue: number) {
// 	const x = (startAcc - endAcc) / (startBase - endBase);
// 	let val = x * (latestValue) + startAcc;
// 	if(endAcc > startAcc && val >= Math.max(startAcc, endAcc)) return Math.max(startAcc, endAcc);
// 	if(endAcc < startAcc && val <= Math.min(startAcc, endAcc)) return Math.min(startAcc, endAcc);
// 	return val;
// }

export const runCanvasScript = (canvas: HTMLCanvasElement) => {
	const c = canvas.getContext('2d');


	canvas.width = innerWidth;
	canvas.height = innerHeight;

	if(!c) return;

	const mouse = {
		x: innerWidth / 2,
		y: innerHeight / 2
	}

	const colors = ['#7f71c5', '#d6d7d7', '#D6D7D7FF', '#D6D7D7FF', '#D6D7D7FF', '#D6D7D7FF', '#266cb2', '#69cc7b', '#ebae70', '#dde0e4', '#D6D7D7FF', '#D6D7D7FF', '#D6D7D7FF', '#dde0e4', '#dde0e4', '#dde0e4', '#dde0e4', '#b4a866'];
	// const c = '#7f71c5';
	// const c = '#69cc7b';
	// const c = '#266cb2';
	// const c = '#ebae70';
	// const colors = ['#053B50', '#407cba', '#64CCC5', '#EEEEEE'];
	// const colors = ['#E5D283', '#176B87', '#64CCC5', '#EEEEEE', '#EEEEEE', '#EEEEEE', '#EEEEEE'];
	// const colors = ['#451952', '#662549', '#AE445A', '#F39F5A'];
	// const colors = ['#FFF5E0', '#FF6969', '#BB2525', '#141E46'];
	const numStars = 100;

	addEventListener('resize', () => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;

		init();
	})

	const gravity = 0.05;
	const fl = canvas.width / 3.5;
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	let initialSpeed = 1;
	let speed = initialSpeed;

	// addEventListener('scroll', e => {
	// 	console.log('speed - ', e);
	// 	speed += 0.1;
	// })

	scroll(progress => {
		speed = progress * 90 + initialSpeed;
	})

	class Particle {
		x = Math.random() * canvas.width;
		y = Math.random() * canvas.height;
		z = Math.random() * canvas.height;
		startZ;
		// color = '#ff5e4c';
		color = colors[randomIntFromInterval(0, colors.length - 1)];
		size = randomIntFromInterval(0.4, 2.5);
		constructor() {
			this.startZ = this.z;
		}

		draw() {
			// if(!c) return;
			// c.beginPath()
			// c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
			// c.fill()
			// c.fillStyle = colors[randomIntFromInterval(0, colors.length - 1)];
			// c.closePath();
		}

		show() {
			if(!c) return;
			let x, y, s;

			x = (this.x - centerX) * (fl / this.z);
			x += centerX;

			y = (this.y - centerY) * (fl / this.z);
			y+= centerY;

			s = this.size * (fl / this.z) + 1;
			if(s >= 12) s = 12

			{
				const startingSize = this.size * (fl / this.startZ) + 1;
				// const x = -1 / (startingSize - 10)
				// const alpha = getLinearRate(startingSize, 10, 0, 1, s);
				const alpha = getLinearRateNew({
					desiredRange: {from: 0.01, to: 1},
					relativeRange: {from: startingSize, to: 5},
					acc: s
				});
				// const alpha =
				// console.log('alpha - ', alpha, startingSize, s);
				c.globalAlpha = alpha;
			}

			// Draw over the whole canvas to create the trail effect
			// c.fillStyle = 'rgba(255, 255, 255, .05)';
			// c.fillRect(0, 0, canvas.width, canvas.height);

			c.beginPath()
			c.arc(x, y, s, 0, Math.PI * 2, false);
			c.fill()
			c.fillStyle = this.color;

			// c.globalAlpha = alpha;
			// console.log('1 - - ', (fl / this.z));
			c.closePath();
		}

		update() {
			this.draw();
		}

		move() {
			this.z -= speed;
			if(this.z <= 0) {
				this.z = Math.random() * canvas.width;
				this.startZ = this.z;
			}
		}
	}

	let particles: Particle[];
	function init() {
		particles = [];

		const particleCount = 900;
		const angleIncrement = Math.PI * 2 / particleCount;

		for (let i = 0; i < particleCount; i++) {

			particles.push(new Particle())
		}
	}

	function animate() {
		if(!c) return;

		requestAnimationFrame(animate);
		c.clearRect(0, 0, canvas.width, canvas.height);

		particles.forEach(particle => {
			particle.show();
			particle.move();
		})
	}

	init();
	animate();
}
