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

fetch('/.vite/manifest.json').then(res => res.json()).then(manifest => {
  const cssFile = manifest['index.html']?.css || []

cssFile.forEach(file => {
// ✅ Dynamically create <link> tag for your stylesheet
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
// styleLink.href = '/src/index.css'; // Path should be relative to public/build output
styleLink.setAttribute('href', `/${file}`);
styleLink.setAttribute('crossorigin', '');
shadowRoot.appendChild(styleLink); // Inject into shadow root
  })
})

// // ✅ Dynamically create <link> tag for your stylesheet
// const styleLink = document.createElement('link');
// styleLink.rel = 'stylesheet';
// styleLink.href = '/src/index.css'; // Path should be relative to public/build output
// styleLink.setAttribute('href', `/${cssFile}`);
// styleLink.setAttribute('crossorigin', '');
// shadowRoot.appendChild(styleLink); // Inject into shadow root

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)