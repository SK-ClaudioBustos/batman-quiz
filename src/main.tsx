import { AppRouter } from '@components/routes/AppRouter.tsx'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <App>
    <AppRouter />
  </App>
)
