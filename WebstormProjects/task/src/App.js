
import React, {Component} from 'react';
import './App.css';
import Table from "./Table";
import Input from "./Input";

class App extends Component {

    state = {
    array: []
  };

  render() {
    //const array = this.state.array;
    return (
        <div>
         <Input/>
        </div>
    );
  }
}

export default App;

