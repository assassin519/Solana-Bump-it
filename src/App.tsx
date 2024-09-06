import './App.css'
import NotificationProvider from './contexts/NotificationContext'
import Routes from './routes'
import { JWTProvider as AuthProvider } from './contexts/JWTContext'
import ThemeProvider from './contexts/ThemeContext'
function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
