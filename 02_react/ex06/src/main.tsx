// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
// import InputMessage from './InputMessage';
// import SelectColor from './SelectColor';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
      <App />
    // 심화
    // <div id="app">
    //   <InputMessage />
    //   <SelectColor />
    // </div>
  // </StrictMode>,
)
