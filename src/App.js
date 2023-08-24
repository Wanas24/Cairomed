import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './Components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './Components/Login'
import Register from './Components/Register'
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import Order from './Components/Order';
import Admin from './Components/Admin';
import Orders from './Components/Orders';
import ScientificArticles from './Components/ScientificArticles';
import { ManageArticles } from './Components/ManageArticles';
import ManageProducts from './Components/ManageProducts';
import ProtectedRoutes from './Components/ProtectedRoutes';
import LoopingParagraph from './Components/FullStop';
import Representative from './Components/Representative';
// import OrdersListener from './Components/Notify';




function App() {
  const routes =createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true, element:<Home/>}, 
      {path:'Login',element:(<Login/>)},
      {path:'Register',element:(<Register/>)},
      {path:'Products',element:(<Products/>)},
      {path:'Orders',element:(<Order/>)},
      {path:'OurRepresentative',element:(<Representative/>)},
      {path:'Admin',element:(<ProtectedRoutes><Admin/></ProtectedRoutes>)},
      {path:'ourOrders',element:(<Orders/>)},
      {path:'ScientificArticles',element:(<ScientificArticles/>)},
      {path:'ManageArticles',element:(<ProtectedRoutes><ManageArticles/></ProtectedRoutes>)},
      {path:'ManageProducts',element:(<ProtectedRoutes><ManageProducts/></ProtectedRoutes>)},
      // {path:'OrdersListener',element:(<OrdersListener/>)},
      {path:'Products/SingleProduct/:productId',element:<SingleProduct/>},
      {path:'test',element:<LoopingParagraph/>},
      {path:'*',element:<Home/>},
    ]}
  ]);

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
