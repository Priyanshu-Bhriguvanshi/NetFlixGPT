import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, SignUp, Browse,AuthContaner } from "./Components"
import { Provider } from 'react-redux'
import store from './Store/Store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/login",
        element: <AuthContaner>
          <Login />
        </AuthContaner>
      },
      {
        path: "/signup",
        element: <AuthContaner>

          <SignUp />
        </AuthContaner>
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
