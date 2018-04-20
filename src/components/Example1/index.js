import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

//components
import Header from '../Header';
import Slide from '../Slide';
import Page1 from '../Page1';


class Example1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/roster' component={Page1}/>
              <Route path='/pigs' component={Slide}/>
              <Route path='/congrats' component={Header}/>
              <Route
                path='/'
                render={() =>
                  <div>
                    <NavLink to='/roster'>Page1</NavLink><br/>
                    <NavLink to="/pigs">Slide</NavLink><br/>
                    <NavLink to="/congrats">Header</NavLink>
                  </div>
                }
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Example1;