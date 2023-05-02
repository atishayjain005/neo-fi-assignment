import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import NavbarMobile from "./components/navbar/NavbarMobile";

import Ethereum from "./assets/Ethereum.png";
import Bitcoin from "./assets/Bitcoin.png";
import Matic from "./assets/Matic.png";
import Solana from "./assets/Solana.png";
import Xrp from "./assets/Xrp.png";
import Binance from "./assets/Binance.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const cryptoCur = [
  {
    name: "Ethereum",
    icon: Ethereum,
    code: "ETH",
  },
  {
    name: "Bitcoin",
    icon: Bitcoin,
    code: "BTC",
  },
  {
    name: "Matic",
    icon: Matic,
    code: "MATIC",
  },
  {
    name: "Binance",
    icon: Binance,
    code: "BNB",
  },
  {
    name: "XRP",
    icon: Xrp,
    code: "XRP",
  },
  {
    name: "Solana",
    icon: Solana,
    code: "SOL",
  },
];

function App() {
  return (
    <div className="app">
      {window.innerWidth > 600 ? <Navbar /> : <NavbarMobile />}
      <Form cryptoCur={cryptoCur} />
    </div>
  );
}

export default App;
