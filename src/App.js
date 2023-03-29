import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="home">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/Quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
