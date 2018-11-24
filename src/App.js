import React, { Component } from 'react';
import PrayerTime from './Components/PrayerTime/PrayerTime';
import './App.css';

class App extends Component {
  // https://react.semantic-ui.com/modules/sidebar/#examples-transitions
  render() {
    return (
      <div className="App">
        <PrayerTime />
      </div>
    );
  }
}

export default App;
