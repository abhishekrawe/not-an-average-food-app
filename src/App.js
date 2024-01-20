import React from "react";
import "./App.css";
import Card from "./components/Card";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offers from "./components/Offers";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import Offer from "./pages/Offers";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

const Home = () => (
  <>
    <Offers />
    <Category />
    <Card />
  </>
);


export default App;