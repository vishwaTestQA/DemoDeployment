import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

const shadowRoot = rootElement.attachShadow({ mode: 'open' })

const container = document.createElement('div')
shadowRoot.appendChild(container)

// Set dynamic --vh on the shadow root
function setVh() {
  const vh = window.innerHeight * 0.01;
  shadowRoot.host.style.setProperty('--vh', `${vh}px`);
}
setVh();
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

if (import.meta.env.DEV) {
  // ✅ In development mode
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/index.css'; // Or wherever your dev CSS is
  link.crossOrigin = '';
  shadowRoot.appendChild(link);

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
}else{

fetch('/manifest.json').then(res => res.json()).then(manifest => {
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
}