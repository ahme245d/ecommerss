import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayOut from "./pages/MainLayOut/MainLayOut"

import Login from "./pages/Login/Login"
import Notfound2 from "./pages/Notfound/Notfound2"
import Register from "./pages/Register/Register"
import CounterContextProvider from "./context/counterContext/CounterContext"
import { UserContextProvider } from "./context/userContext/userContext"
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { Offline, Online } from "react-detect-offline"
import CartContextProvider from "./context/cartContext/cartContext"
import { Toaster } from "react-hot-toast"
import CheckOut from "./pages/checkOut/CheckOut"
import AllOrder from "./pages/allOrders/AllOrder"
import Brands from "./pages/brandes/Brands"
import Products from "./component/Products/Products"
import Categoris from "./pages/catigores/Categoris"
import Product from "./pages/product/Product"
import Forget from "./pages/forget/Forget"
import ResetCode from "./pages/forget/ResetCode"
import NewPassword from "./pages/forget/NewPassword"

function App() {

 let routers=createBrowserRouter([{
path:'', element:<MainLayOut/>,
children:[
  { index:true,element:<ProtectedRoute><Home/>  </ProtectedRoute>},
  {path:'Cart',element:<ProtectedRoute><Cart/>  </ProtectedRoute>},
  {path:'CheckOut',element:<ProtectedRoute><CheckOut/>  </ProtectedRoute>},
  {path:'/ProductDetails/:id',element:<ProtectedRoute><ProductDetails/>  </ProtectedRoute>},
  {path:'allOrders',element:<ProtectedRoute><AllOrder/>  </ProtectedRoute>},
  {path:'Categoris',element:<ProtectedRoute><Categoris/>  </ProtectedRoute>},
  {path:'Product',element:<ProtectedRoute><Product/>  </ProtectedRoute>},
  {path:'Brands',element:<ProtectedRoute><Brands/>  </ProtectedRoute>},
  {path:'Login',element:<Login/>},
  {path:'resetCode',element:<ResetCode/>},
  {path:'newpassword',element:<NewPassword/>},
  {path:'forget',element:<Forget/>},
  
  {path:'Register',element:<Register/>},
  {path:'*',element:<Notfound2/>}
]

 }]);
return <UserContextProvider>
  <CartContextProvider>
 <Offline>
  <div className="b g-red-100 absolute bottom-1 right-5 z-50 p-8">
  Only shown offline (surprise!)
  
  </div>
  </Offline>
  <Toaster />
<CounterContextProvider>

<RouterProvider router={routers}></RouterProvider>
</CounterContextProvider>
</CartContextProvider>
</UserContextProvider>





}

export default App
