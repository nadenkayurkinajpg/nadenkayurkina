import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Image1 from './img/pig2250x250.jpg';
import Image2 from './img/pig3250x250.jpg';
import Image3 from './img/pig4250x250.jpg';

class Slide extends Component {
  state = {
    image: Image1
  };
  
  handleClick() {
    this.setState(prevState => ({
      image: prevState.image === Image1
        ? Image2
        : prevState.image === Image2
          ? Image3
          : Image1
    }))
  }
  
  render() {
    return (
      <div>
        <div>
          <NavLink to='/'>назад</NavLink>
        </div>
        <div
          onClick={::this.handleClick}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={this.state.image}
            alt="Pigs"
          />
        </div>
      </div>
    )
  }
};

export default Slide;