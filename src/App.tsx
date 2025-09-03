import React from 'react';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <RootStyled>
      <React.Suspense fallback={<RingLoader />}>
        <Home />
      </React.Suspense>
    </RootStyled>
  );
}
const RootStyled = styled.main`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

export default App;
