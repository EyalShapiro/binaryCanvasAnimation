import styled from 'styled-components';

import { useBinaryRain } from '../hook/useBinaryRain.js';
import { exportImage } from '../utils/exportImage';

const BinaryRain = () => {
  const { canvasRef } = useBinaryRain();
  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'block', background: 'black' }} />
      <ButtonStyle
        onClick={() => {
          exportImage(canvasRef.current!);
        }}
      >
        {'Export Image'}
      </ButtonStyle>
    </>
  );
};
const ButtonStyle = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: #0f0;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export default BinaryRain;
