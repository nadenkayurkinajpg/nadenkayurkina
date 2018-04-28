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
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1300px',
          margin: 'auto',
        }
        }>
        <div>
          <Header/>
          <Body/>
        </div>
       <div>
        <Footer/>
       </div>
       </div>
    );
  }
}

export default App;