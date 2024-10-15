import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {DashboardLayoutBranding} from './App.jsx'
import DeliverySystem from './App.jsx'
 
import './index.css'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <DashboardLayoutBranding />
     <DeliverySystem />
  </StrictMode>,
)
