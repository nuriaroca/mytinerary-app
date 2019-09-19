import React from 'react';
import Home from './views/Home'
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;