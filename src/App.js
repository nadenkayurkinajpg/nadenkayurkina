import React, {Component} from 'react';
import Example1 from './components/Example1';
//styles
import './App.scss';
import './App.less';
import './App.styl';


class App extends Component {
  render() {
    return (
      <div>
        <Example1/>
      </div>
    );
  }
}

export default App;