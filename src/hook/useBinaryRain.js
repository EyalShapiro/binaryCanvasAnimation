import { useEffect, useRef } from "react";

export const useBinaryRain = () => {
	const text = "i-tech",
		colorBin = "#0F0",
		speed = 0.75,
		fontSize = 16,
		backgroundColor = "rgba(10, 10, 10, 0.1)";
	const canvasRef = useRef(null);
	const animationRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const columns = Math.floor(canvas.width / fontSize);
		const drops = Array(columns).fill(1);
		const binaryChars = "01";

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
			ctx.font = "180px monospace";
			ctx.fillStyle = "rgba(20, 200, 200, 0.9)";
			ctx.shadowBlur = 20;

			const textWidth = ctx.measureText(text).width;
			ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 2);
		};

		const animate = () => {
			drawBinaryRain();
			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationRef.current);
		};
	}, [text, colorBin, speed, fontSize, backgroundColor]);

	return { canvasRef };
};
