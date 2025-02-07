
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './components/ui/auth/layout.jsx';
import LoginLayout from './pages/auth/login.jsx';
import RegisterLayout from './pages/auth/register.jsx';
import AdminLayout from './components/ui/admin/layout.jsx';
import AdminDashboard from './pages/admin/dashboard.jsx';
import AdminProduct from './pages/admin/product.jsx';
import AdminFeature from './pages/admin/feature.jsx';
import AdminOrder from './pages/admin/order.jsx';
import ShoppingLayout from './components/ui/shopping/layout.jsx';
import NotFound from './pages/not-found/notFound.jsx';
import ShoppingHome from './pages/shopping/home.jsx';
import ShoppingAccount from './pages/shopping/account.jsx';
import ShoppingCheckOut from './pages/shopping/checkout.jsx';
import ShoppingListing from './pages/shopping/listing.jsx';
import CheckAuth from './components/ui/common/checkauth.jsx';





function App() {
 
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <CheckAuth> <AuthLayout/> </CheckAuth> ,
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
    {
      path: "/admin",
      element:<CheckAuth > <AdminLayout/>  </CheckAuth> ,
      children: [
        {
          path:"dashboard",
          element:<AdminDashboard/>
        },
        {
          path:"product",
          element:<AdminProduct/>
        },
        {
          path:"feature",
          element:<AdminFeature/>
        },
        {
          path:"order",
          element:<AdminOrder/>
        },
      ]
    },
    {
      path: "/shop",
      element: <CheckAuth  > <ShoppingLayout/></CheckAuth>,
      children: [
        {
          path:"home",
          element: <ShoppingHome/>
        },
        {
          path:"account",
          element: <ShoppingAccount/>
        },
        {
          path:"checkout",
          element: <ShoppingCheckOut/>
        },
        {
          path:"listing",
          element: <ShoppingListing/>
        },
      ]
    },
    {
      path:"*",
      element: <NotFound/>
    }
  ]);
  console.log("App component rendered");
  return (
    <>
   
      <RouterProvider router={router} />
    </>
  );
}

export default App;