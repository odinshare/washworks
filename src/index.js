import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import AnalyticsProvider from './components/AnalyticsProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <AnalyticsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AnalyticsProvider>
);