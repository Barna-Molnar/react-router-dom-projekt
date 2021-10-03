import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
