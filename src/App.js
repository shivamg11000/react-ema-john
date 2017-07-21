import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';


const Main = () => (
  <main>
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/cart' component={Cart}/>
   </Switch>
  </main>
)

//PlaceHolder for Components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
