import './App.scss'
import Home from './Page/Home/Home';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Cart from './Page/Cart/Cart'; 
import Products from './Page/Products/Products';
import Contact from './Page/Contact/Contact';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:'/products/:product',
      element:<Products />
    },
    {
      path:'/contact-us',
      element:<Contact />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
