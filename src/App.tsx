import 'animate.css';
import './style.css'
import {BrowserRouter, Route , Routes } from "react-router-dom"
import Home from './modules/Home'
import RootLayout from './components/RootLayout'
import Cart from './modules/Cart';
import { ShoppingCartProvider } from './context/ShopingCartContext';
import 'animate.css';
function App(){
  return (
    <ShoppingCartProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </ShoppingCartProvider>
  )
}

export default App
