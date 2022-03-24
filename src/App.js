import "./css/style.css"

import Navbar from "./Components/Navbar";
import Welcome from "./Sections/Welcome";
import Wallet from "./Sections/Wallet";
import CryptoCurrencies from "./Sections/CryptoCurrencies";
import Footer from "./Components/Footer";
import Newsletter from "./Sections/Newsletter";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Welcome username={'maobrenovic 👋🏻'}/>
        <Wallet/>
        <CryptoCurrencies/>
        <CryptoCurrencies/>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
