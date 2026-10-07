import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
import { TasksApp } from './TaskApp'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <TasksApp />
  </StrictMode>
)
