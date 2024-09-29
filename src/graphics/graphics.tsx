import React from 'react';
import { createRoot } from 'react-dom/client';
import LiveIcon from './components/LiveIcon';

const app = (
  <>
    <LiveIcon />
  </>
);

const container = document.getElementById('app')!;
createRoot(container).render(app);
