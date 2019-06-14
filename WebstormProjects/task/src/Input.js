import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Input.css'

var TOTAL_COST = 0;

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

  addProductPrice = () => {
    const {array, item} = this.state;
    if (item.price !== 0 && item.text !== '') {
      array.push(item);
      this.setState({array: array, item: {...this.state.item, id: this.state.item.id + 1}});

      TOTAL_COST = Number(TOTAL_COST) + Number(item.price);
    }
  };

  deleteItem = (elem) => {
    const {array} = this.state;
    console.log(elem);
    const newArray = array.filter(item => {
      return item !== elem
    });
    console.log(newArray);
    this.setState({
      array: newArray
    });
    console.log('PRICE ', elem.price);
    TOTAL_COST = Number(TOTAL_COST) - Number(elem.price);
  };

  render() {
    const {array} = this.state;
    return (
        <div style={{marginTop:'70px'}}>
          <div style={{marginLeft: '90%'}}>
            <Link to='/'>ВЫЙТИ</Link>
          </div>
            <form>
              <input
                  id="input"
                  placeholder='Введите название'
                  type="text"
                  onChange={this.changeHandlerProduct}/>
              <input
                  id="input"
                  placeholder='Введите цену'
                  type='number'
                  onChange={this.changeHandlerPrice}/>
              <input
                  id="addButton"
                  type="button"
                  value="Добавить"
                  onClick={this.addProductPrice}/>
            </form>
          {
            array.length === 0 &&
            <p id='withoutEl'>Добавьте элементы</p>
          }
          {
            array.length > 0 &&
            <div>
            <div id='totalCost'>
              Общая стоимость: {TOTAL_COST}
            </div>
              <table id='products'>
                <tbody>
                <tr>
                  <td>Название</td>
                  <td>Цена</td>
                  <td>Изображение</td>
                </tr>
                {array.map((elem) => {
                  return (
                      <tr key={elem}>
                        <td>{elem.text}</td>
                        <td>{elem.price}</td>
                        <td>
                          {elem.pictures.map((picture) => {
                            return (
                                <td>
                                  <img style={{width: '200px'}} src={picture[elem.id].download_url} alt="Product"/>
                                </td>
                            )
                          })}
                        </td>
                        <td>
                          <button
                              id='deleteButton'
                              onClick={() => this.deleteItem(elem)}>
                            Удалить
                          </button>
                        </td>
                      </tr>
                  )
                })}
                </tbody>
              </table>
             </div>
            }
        </div>
    );
  }
}
export default Input;
/*<td>
     <img src={elem.pictures} alt="Product"/>
   </td>*/