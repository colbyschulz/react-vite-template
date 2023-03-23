import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStylesCss from './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStylesCss />
    <App />
  </React.StrictMode>,
);
