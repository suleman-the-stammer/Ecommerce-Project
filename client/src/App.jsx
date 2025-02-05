
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './components/ui/auth/layout.jsx';
import LoginLayout from './pages/auth/login.jsx';
import RegisterLayout from './pages/auth/register.jsx';

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
      {
        path:"login",
        element: <LoginLayout/>
      },
      {
        path:"register",
        element: <RegisterLayout/>
      },
    ]
  },
]);

function App() {
  console.log("App component rendered");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;