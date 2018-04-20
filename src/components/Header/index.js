import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

//components
import Emoji from './Emoji';
import styles from './styles.module.css';

class Header extends Component {
  state = {
    current: 0,
    items: ['привет, Наденька!',
      'с днем святого валентина!',
      'этот день длится уже несколько дней',
      'а знаешь почему?',
      'потому что он для нас особенный',
      'наша любовь началась с тобой именно в этот день!',
      'ты начала программировать!',
      'мы как черешенка и тортик']
  };
  
  handleClick() {
    this.setState(prevState => ({
      current: prevState.current < 6 ? prevState.current + 1 : 0
    }));
  }
  
  render() {
    let message = (this.props.items && this.props.items[this.state.current]) || this.state.items[this.state.current];
    
    return (
      <div>
        <div>
          <NavLink to='/'>назад</NavLink>
        </div>
        <div
          onClick={::this.handleClick}
          className={styles.header}
          style={{
            backgroundColor: this.props.backgroundColor,
            color: this.props.color
          }}
        >
          <h2>
            <Emoji emoji="❤"/>
            <span>{message}</span>
            <Emoji emoji="❤"/>
          </h2>
        </div>
      </div>
    );
  }
}


export default Header;
