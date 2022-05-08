import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './app';
import AppContextProvider from './appState/index.js';

const Stack =
(
<AppContextProvider>
  <App />
</AppContextProvider>
)

ReactDOM.createRoot(document.getElementById('root')).render(Stack)