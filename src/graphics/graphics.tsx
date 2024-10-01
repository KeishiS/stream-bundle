import React from 'react';
import { createRoot } from 'react-dom/client';
import LiveIcon from './components/LiveIcon';
import InfoBox from './components/InfoBox';

const app = (
  <>
    <LiveIcon />
    <InfoBox />
  </>
);

const container = document.getElementById('app')!;
createRoot(container).render(app);
