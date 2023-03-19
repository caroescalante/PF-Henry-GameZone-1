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
        <Footer />

    </div>
  );
}

export default App;
