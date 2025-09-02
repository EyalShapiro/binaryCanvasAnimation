import { useBinaryRain } from '../hook/useBinaryRain';

const BinaryRain = () => {
  const { canvasRef } = useBinaryRain();

  const exportImage = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'binary-rain.png';
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'block', background: 'black' }} />
      <button onClick={exportImage} style={buttonStyle}>
        Export Image
      </button>
    </div>
  );
};

const buttonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  background: '#0F0',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default BinaryRain;
