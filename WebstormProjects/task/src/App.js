
import React, {Component} from 'react';
import './App.css';
import Authorization from './components/Authorization'
import {BrowserRouter, Route} from 'react-router-dom'
import Input from "./Input";
import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";

class App extends Component {

    state = {
    array: []
  };

  render() {
    return (
            <BrowserRouter>
              <div>
                <HeaderPage/>
                <Route path="/" component={Authorization} exact />
                <Route path='/accounting' component={Input}/>
                <FooterPage/>
              </div>
            </BrowserRouter>
    );
  }
}

export default App;

