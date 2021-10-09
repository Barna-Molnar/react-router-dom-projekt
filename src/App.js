import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AuthContextprovider from './context/AuthContext';
import Admin from './Components/Admin';
import PrivateRoute from './Components/PrivateRoute';
import PrivateRoute2 from './Components/PrivateRoute2';

function App() {
  return (
    <AuthContextprovider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/admin" component={Admin} /> */}
          <PrivateRoute2 path="/admin"  component={Admin}/>
          
       
        </Switch>
      </BrowserRouter>
    </AuthContextprovider>
  );
}

export default App;
