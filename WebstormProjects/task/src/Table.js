import React, {Component} from "react";

/*let array = [
  'Apple',
  'Pear',
  'Pineapple',
  'Orange'
];*/

class Table extends Component {
  constructor() {
    super();
    this.state = {
      array: []
    }
  }
  render() {
    return (
        <div>
          <table border="1">
            <caption>Table of product</caption>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
            {this.state.array.map(elem=>{
              return (
                  <tr>
                    <td>{elem}</td>
                  </tr>
              )
            })}
          </table>
        </div>
    )
  }
}

export default Table;