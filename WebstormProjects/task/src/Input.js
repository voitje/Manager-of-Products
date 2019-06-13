import React, {Component} from 'react';

import './Input.css'

var TOTAL_COST = 0;

var inputStyle = {
  marginTop: "20px",
  marginLeft: "20px",
  marginBottom: "20px"
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
    TOTAL_COST = Number(TOTAL_COST) + Number(item.price);
  };

  deleteItem = (id) => {
    console.log(this.state.item.id);
    const {array, item} = this.state;
    const newArray = array.filter(item => id !== item.id);
    this.setState({array: newArray});
    TOTAL_COST = Number(TOTAL_COST) - Number(item.price);
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
              {elem.pictures.map((picture) => {
                console.log(picture[elem.id]);
                return (
                    <td>
                      <img style={{width: '200px'}} src={picture[elem.id].download_url} alt="Product"/>
                      </td>
                  )})}
              </td>
              <td>
                <button
                    id='deleteButton'
                    onClick={() => this.deleteItem(elem.id)}>
                  Удалить</button>
              </td>
            </tr>
      )
    })
  };

  render() {
    return (
        <div style={{marginTop:'70px'}}>
            <form>
              <input
                  id="input"
                  placeholder='Введите цену'
                  type='text'
                  onChange={this.changeHandlerPrice}/>
              <input
                  id="input"
                  placeholder='Введите название'
                  style={inputStyle}
                  type="text"
                  onChange={this.changeHandlerProduct}/>
              <input
                  id="addButton"
                  type="button"
                  value="Добавить"
                  onClick={this.addProductPrice}/>
            </form>
          <div id='totalCost'>
            Общая стоимость: {TOTAL_COST}
          </div>

          <table id='products'>
            <tr>
              <td>Название</td>
              <td>Цена</td>
              <td>Изображение</td>
            </tr>
            <tbody>
            {this.renderTableData()}
            </tbody>
          </table>
        </div>
    );
  }
}
export default Input;
/*<td>
     <img src={elem.pictures} alt="Product"/>
   </td>*/