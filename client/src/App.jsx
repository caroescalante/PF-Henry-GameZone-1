import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./view/Home/Home";
import Detail from "./view/Detail/Detail"
//import Login from "./view/Login/Login";
import CreateGameForm from "./view/CreateGameForm/CreateGameForm";
import Community from "./view/Community/Community";
import RegistrationForm from "./view/RegistrationForm/RegistrationForm";
import Navbar from '../src/components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Favorites from "./view/Favorites/Favorites";
import ShopCart from "./view/shopCart/shopCart";
import ProfileUser from "./view/ProfileUser/ProfileUser";
import PaymentSuccess from "./view/PaymentSuccess/PaymentSuccess";
import PaymentFailure from "./view/PaymentFailure/PaymentFailure";
import Error404 from "./view/Error404/Error404";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={Detail} />
        <Route exact path="/create" component={CreateGameForm} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/profile" component={ProfileUser} />
        <Route exact path="/paymentsuccess" component={PaymentSuccess} />
        <Route exact path="/cart" component={ShopCart} />
        <Route exact path="/paymentfailure" component={PaymentFailure} />
        <Route path="*" component={Error404} />
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
