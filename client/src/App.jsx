import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./view/Home/Home";
import Detail from "./view/Detail/Detail"
import Login from "./view/Login/Login";
import CreateGameForm from "./view/CreateGameForm/CreateGameForm";
import Contact from "./view/Contact/Contact";
import RegistrationForm from "./view/RegistrationForm/RegistrationForm";
import Navbar from '../src/components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Favorites from "./view/Favorites/Favorites";
import shopCart from "./view/shopCart/shopCart";
import PaymentFailure from "./view/PaymentFailure/PaymentFailure"

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={Detail} />
        <Route path="/login" component={Login}/>
        <Route path="/create" component={CreateGameForm} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/favorites" component={Favorites} />
        <Footer />
        <Route path="/cart" component={shopCart} />
        <Route path="/paymentfailure" component={PaymentFailure}/>

    </div>
  );
}

export default App;
