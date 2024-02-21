import rough from 'roughjs';

const generator = rough.generator({options: {roughness: 0}});

export default function initCanvas(canvasEl: HTMLCanvasElement) {
    const ctx = canvasEl.getContext('2d');
    canvasEl.width = innerWidth;
    canvasEl.height = innerHeight;

    const roughCanvas = rough.canvas(canvasEl);
    const rect = roughCanvas.rectangle(80, 20, 100, 120, {roughness: 0, fill: 'red', fillStyle: 'solid', strokeWidth: 0, stroke: 'transparent'});
    roughCanvas.draw(rect);


}