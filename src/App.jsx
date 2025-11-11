import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/shop/Shop';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blog_Details from './components/Blog/Blog_Details';
import { fetchCartData, sendCartData } from './store/cart-action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/Notification/Notification';
import Goto_Top from './components/Goto_Top/Goto_Top';
import Loader from './components/Loader/Loader';


let isInitial = true;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])



  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (

        <BrowserRouter>
          {/* {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )} */}
          <Navbar />
          <Goto_Top />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shoppingdetail' element={<Shop />} />
            <Route path='/features' element={<Features />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogDetails/:id' element={<Blog_Details />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  )
}

export default App
