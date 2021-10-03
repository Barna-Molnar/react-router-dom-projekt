import './App.css';
import About from './Cpmponents/About';
import Blog from './Cpmponents/Blog';
import Contact from './Cpmponents/Contact';
import Home from './Cpmponents/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Cpmponents/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route strict exact path="/" component={Home} />
        <Route strict exact path="/about" component={About} />
        <Route strict exact path="/contact" component={Contact} />
        <Route strict exact path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
