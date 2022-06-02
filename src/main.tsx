import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './clients'
import { SelectedContestProvider } from './contexts/SelectedContestProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <SelectedContestProvider>
      <App />
    </SelectedContestProvider>
  </QueryClientProvider>
)
