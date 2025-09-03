export function exportImage<ET extends HTMLCanvasElement>(canvas: ET) {
  try {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'binary-rain.png';
    link.click();
  } catch (error) {
    console.error(error);
  }
}
