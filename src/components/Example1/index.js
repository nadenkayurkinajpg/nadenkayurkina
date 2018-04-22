import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

//components
import Hdr from '../Hdr';
import Slide from '../Slide';
import Page1 from '../Page1';


class Example1 extends Component {
  render() {
    return (
      <div>
        <div>
        
        </div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/roster' component={Page1}/>
              <Route path='/pigs' component={Slide}/>
              <Route path='/congrats' component={Hdr}/>
              <Route
                path='/'
                render={() =>
                  <div>
                    <NavLink to='/roster'>Page1</NavLink><br/>
                    <NavLink to="/pigs">Slide</NavLink><br/>
                    <NavLink to="/congrats">Hdr</NavLink>
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