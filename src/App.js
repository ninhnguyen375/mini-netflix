import React, { Component } from 'react';
import NavigationBar from './components/navigation-bar/NavigationBar';
import ContextVideo from './components/context-video/ContextVideo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <ContextVideo />
      </div>
    );
  }
}

export default App;
