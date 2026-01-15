import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Stairs } from './componants/common/Stairs.jsx'
import { NavProvider } from './componants/common/NavContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavProvider>
          <App />
        </NavProvider>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
