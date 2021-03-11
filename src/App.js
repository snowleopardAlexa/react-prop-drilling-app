import React from 'react';
import First from './components/First';

class App extends React.Component {
  state = {
    text: 'This is prop-drilling'
  };
  render() {
    return <First text={this.state.text} />;
  }
}

export default App;
