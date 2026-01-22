import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"/product-listing"} exact={true} element={<ProductListing />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
