import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GifApp from './pages/GifApp';
import './styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifApp></GifApp>
  </StrictMode>,
)
