import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard from './ProductCard.js';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <h1 className="title">BeautiFind</h1>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productcard">ProductCard</Link>
          </li>
        </ul>
      </nav>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productcard" element={<ProductCard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
