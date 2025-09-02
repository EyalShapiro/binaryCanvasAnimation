import { useEffect, useRef } from 'react';
import GLOBAL_STYLE from '../constants/style';
const { colorBin, speed, fontSize, backgroundColor, main_title } = GLOBAL_STYLE;
const binaryChars = '01';
const MAIN_TITLE_TEXT = 'Welcome to Binary Rain';
export const useBinaryRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const drawBinaryRain = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = colorBin;

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const mainText = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        ctx.fillText(mainText, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;

        drops[i] += speed; // Adjust falling speed
      }

      drawText();
    };

    const drawText = () => {
      ctx.font = main_title.font;
      ctx.fillStyle = main_title.fillStyle;
      ctx.shadowBlur = main_title.shadowBlur;

      const textWidth = ctx.measureText(MAIN_TITLE_TEXT).width;
      ctx.fillText(MAIN_TITLE_TEXT, (canvas.width - textWidth) / 2, canvas.height / 2);
    };

    const animate = () => {
      drawBinaryRain();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return { canvasRef };
};
