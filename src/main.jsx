import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './router/MainRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={MainRouter}>
      <App />
    </RouterProvider>
  </Provider>
  //</React.StrictMode>,
)
