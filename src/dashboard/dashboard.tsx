import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const app = (
  <>
    <App />
  </>
);

const container = document.getElementById('app')!;
createRoot(container).render(app);
