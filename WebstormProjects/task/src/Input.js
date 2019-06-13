import React, {Component} from 'react';

import './Input.css'

var inputStyle = {
  marginTop: "20px",
  marginLeft: "20px"
};

var nameStyle = {
  //width: "100px",
  float: "left"
};

function createProduct(props){

}

class Input extends Component {
  state = {
    array: [],
    item: {
      id: 0,
      text: '',
      pictures: [],
      price: 0
    },
  };

  /*componentDidMount() {
    fetch('https://picsum.photos/200/300?random=2')
        .then((response) => response.blob())
        .then((blob) => {
          console.log(blob);
          let url = window.URL.createObjectURL(blob);
          this.setState({item: {pictures: url}});
        })
  };*/

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2?limit=100')
        .then((response) => response.json())
        .then((download_url) => {
          const {pictures} = this.state.item;
          pictures.push(download_url);
        })
  };

  changeHandlerProduct = e => {
    if (e.target.value !== '') {
      this.setState({item: {...this.state.item, text: e.target.value}});
    }
  };

  changeHandlerPrice = e => {
    if (e.target.value !== '') {
      this.setState({item: {...this.state.item, price: e.target.value}});
    }
  };

  /*addProduct = () => {
    const {array, item} = this.state;
    if (item.text !== '') {
      array.push(item);
      this.setState({array: array, item: {...this.state.item, id: this.state.item.id + 1}});
      this.setState({item: {text: ''}});
    }
  };*/

  addProductPrice = () => {
    const {array, item} = this.state;
    if (item.price !== 0 && item.text !== '') {
      array.push(item);
      this.setState({array: array, item: {...this.state.item, id: this.state.item.id + 1}});
      //this.setState({item: {price: 0, text: ''}});
    }
  };

  deleteItem = (id) => {
    console.log(this.state.item.id);
    const {array} = this.state;
    const newArray = array.filter(item => id !== item.id);
    this.setState({array: newArray});
  };

  renderTableData() {
    return this.state.array.map((elem) => {
      return (
          <tr key={elem.id}>
            <td>
              {elem.text}
            </td>
            <td>
              {elem.price}
            </td>
            <td>
              <button
                  id='deleteButton'
                  onClick={() => this.deleteItem(elem.id)}>
                Delete</button>
            </td>
            <td>
            {elem.pictures.map((picture) => {
              console.log(picture[elem.id]);
              return (
                  <td>
                    <img style={{width: '200px'}} src={picture[elem.id].download_url} alt="Product"/>
                    </td>
                )})}
            </td>
          </tr>
      )
    })
  };

  render() {
    return (
        <div>
          <table id='products'>
            <tbody>
            {this.renderTableData()}
            </tbody>
          </table>
            <form>
              <input
                  placeholder='enter price'
                  type='text'
                  onChange={this.changeHandlerPrice}/>
              <input
                  placeholder='enter product'
                  style={inputStyle}
                  type="text"
                  onChange={this.changeHandlerProduct}/>
              <input
                  type="button"
                  value="Add"
                  onClick={this.addProductPrice}/>
            </form>
        </div>
    );
  }
}
export default Input;
/*<td>
     <img src={elem.pictures} alt="Product"/>
   </td>*/