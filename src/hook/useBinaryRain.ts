import { useEffect, useRef } from 'react';

import GLOBAL_STYLE from '../constants/style';
import { drawBinaryRain, drawText } from '@/utils/drawElement';

export const useBinaryRain = () => {
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(canvas.width / GLOBAL_STYLE.fontSize);
    const drops = Array(columns).fill(1);

    const animate = () => {
      if (!ctx) return;
      drawBinaryRain(canvas, ctx, drops);
      drawText(canvas, ctx);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return { canvasRef };
};
