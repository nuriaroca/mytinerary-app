import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './views/Home';
import Cities from './views/Cities';
import Footer from './components/Footer';
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Route exact path='/' component={Home} />
          <Route path='/cities' component={Cities} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;