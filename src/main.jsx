import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

const shadowRoot = rootElement.attachShadow({ mode: 'open' })

const container = document.createElement('div')
shadowRoot.appendChild(container)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// ✅ Dynamically create <link> tag for your stylesheet
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = '/src/index.css'; // Path should be relative to public/build output
shadowRoot.appendChild(styleLink); // Inject into shadow root

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)