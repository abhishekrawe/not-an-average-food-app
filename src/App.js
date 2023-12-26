import "./App.css";
import Card from "./components/Card";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offers from "./components/Offers";
function App() {
  return (
    <div className="App">
      <Header/>
      <Offers/>
      <Category/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
