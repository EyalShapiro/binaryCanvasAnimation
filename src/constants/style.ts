export const MAIN_TITLE_STYLE = {
  font: '120px monospace',
  fillStyle: 'rgba(20, 200, 200, 0.9)',
  shadowBlur: 20,
} as const;

const GLOBAL_STYLE = {
  colorBin: '#0F0',
  fontSize: 16,
  backgroundColor: 'rgba(10, 10, 10, 0.1)',
  main_title: MAIN_TITLE_STYLE,
} as const;

export default GLOBAL_STYLE;
