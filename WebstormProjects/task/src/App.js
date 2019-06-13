
import React, {Component} from 'react';
import './App.css';
import HeaderPage from "./HeaderPage"
import FooterPage from "./FooterPage"
import Input from "./Input";

class App extends Component {

    state = {
    array: []
  };

  render() {
    //const array = this.state.array;
    return (
        <div>
          <HeaderPage/>
          <Input/>
          <FooterPage/>
        </div>
    );
  }
}

export default App;

