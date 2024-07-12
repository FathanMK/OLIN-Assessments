import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import "@theme-toggles/react/css/Expand.css"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript";
import 'prismjs/components/prism-json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
