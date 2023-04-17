import React from 'react';
import '../styles/app.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Navbar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
      <Navbar />
      <Link className="item" to="/">
        View Properties
      </Link>
      <Link className="item" to="/add-property">
        Add Properties
      </Link>
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/add-property" element={AddProperty} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
