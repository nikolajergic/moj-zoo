import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Customers = () => (
  <div>
    <h2>Customers</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/customers" component={Customers}/> 
      <Route exact path="/products" component={Products}/> 
        </Switch>
      </div>
    </Router>
  );
  }
  



export default App;
