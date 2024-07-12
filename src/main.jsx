import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PomodoroProvider } from './context/PomodoroContext.jsx'


ReactDOM.createRoot(document.getElementById('pomodoro-app')).render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>,
)
