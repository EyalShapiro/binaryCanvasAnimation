import GLOBAL_STYLE from '../constants/style';

const { colorBin, fontSize, backgroundColor, main_title } = GLOBAL_STYLE;
const binaryChars = '01';
const MAIN_TITLE_TEXT = 'Welcome to Binary Rain';
const SPEED = 0.75;

export function drawBinaryRain(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, drops: Array<number>) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, window.innerHeight);
  ctx.fillStyle = colorBin;

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const randomIndex = Math.floor(Math.random() * binaryChars.length);
    const text = binaryChars[randomIndex];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;

    drops[i] += SPEED; // Adjust falling speed
  }
}

export const drawText = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  ctx.font = main_title.font;
  ctx.fillStyle = main_title.fillStyle;
  ctx.shadowBlur = main_title.shadowBlur;

  const textWidth = ctx.measureText(MAIN_TITLE_TEXT).width;
  ctx.fillText(MAIN_TITLE_TEXT, (canvas.width - textWidth) / 2, canvas.height / 2);
};
