import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Page1 extends Component {
  
  render() {
    return (
      <div>
        <div>
          <NavLink to='/'>назад</NavLink><br/>
          <NavLink to='/pigs'>Pigs</NavLink>
        </div>
        Hi!
      </div>);
  }
}

export default Page1;