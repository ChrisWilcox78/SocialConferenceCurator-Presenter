import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaEventList from './components/media-event-list/MediaEventList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaStream: null
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Social Conference Curator</h1>
        </header>
        <MediaEventList />
      </div>
    );
  }
}

export default App;
