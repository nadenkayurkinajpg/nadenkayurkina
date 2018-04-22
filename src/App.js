import React, {Component} from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.sass';
//styles
import './App.scss';
import './App.less';
import './App.styl';


class App extends Component {
  render() {
    return (
      <div
      className="App"
      style={{
        backgroundColor: 'yellow',
      }}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;