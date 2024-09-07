import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
// import ThemeProvider from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        {/* <ThemeProvider> */}
        <App />
        {/* </ThemeProvider > */}
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
)