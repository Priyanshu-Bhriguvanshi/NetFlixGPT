import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { Login, SignUp, Browse, AuthContaner, ErrorPage, ProtectedRoute } from "./Components/index.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        )
      },
      {
        path: "login",
        element: (
          <ProtectedRoute authentication={false}>
            <AuthContaner>
              <Login />
            </AuthContaner>
          </ProtectedRoute>
        )
      },
      {
        path: "signup",
        element: (
          <ProtectedRoute authentication={false}>
            <AuthContaner>
              <SignUp />
            </AuthContaner>
          </ProtectedRoute>
        )
      },
      {
        path: "browse",
        element: (
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>
  </StrictMode>
);
