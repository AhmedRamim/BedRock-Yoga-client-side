import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import { Router } from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Router}>
          <Main />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>


  </React.StrictMode>,
)
