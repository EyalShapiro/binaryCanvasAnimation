const canvas = document.getElementById("binaryCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = Array(columns).fill(1);
const fontSize = 16;
const binaryChars = "01";

function drawBinaryRain() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  drawText();
}

function drawText() {
  const text = "i-tech";
  ctx.font = "50px monospace";
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 2);
}

function animate() {
  drawBinaryRain();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});