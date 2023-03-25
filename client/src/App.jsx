import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./view/Home/Home";
import Detail from "./view/Detail/Detail"
import Login from "./view/Login/Login";
import CreateGameForm from "./view/CreateGameForm/CreateGameForm";
import Community from "./view/Community/Community";
import RegistrationForm from "./view/RegistrationForm/RegistrationForm";
import Navbar from '../src/components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Favorites from "./view/Favorites/Favorites";
import ShopCart from "./view/shopCart/shopCart";
import ProfileUser from "./view/ProfileUser/ProfileUser";
import PaymentSuccess from "./view/PaymentSuccess/PaymentSuccess";

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={Detail} />
        <Route path="/login" component={Login}/>
        <Route path="/create" component={CreateGameForm} />
        <Route path="/community" component={Community} />
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/profile" component={ProfileUser}/>
        <Route path="/paymentsuccess" component={PaymentSuccess} />
        <Route path="/cart" component={ShopCart} />
        <Footer />

    </div>
  );
}

export default App;
