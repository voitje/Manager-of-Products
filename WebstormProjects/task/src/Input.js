import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Modal from './components/Modal'
import './Input.css'

let TOTAL_COST = 0;

class Input extends Component {
  state = {
    array: [],
    item: {
      id: 0,
      text: '',
      pictures: [],
      price: 0
    },
    isOpen: false,
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
      this.setState({style: {display: 'none'}});
    }
  };

  openModuleWindow = () => {
    this.setState({style: { display: 'block'}});
  };

  closeSpan = () => {
    this.setState({style: { display: 'none'}});
    console.log(this.state.style.display);
  };

  addItem = (text, price, id) => {
    if (text !== '') {
      console.log('ADD_ITEM_PROPS', text, price, id);
      this.setState(prevState => ({
        ...prevState,
        array: [...prevState.array, {text, price, id}]
      }), () => console.log('NAGOVNIl', this.state));
      console.log('SETSTATE_ITEM', this.state);
      TOTAL_COST = Number(TOTAL_COST) + Number(price);
      //this.handleChangeModal();
      console.log('IS_OPEN', this.state.isOpen);
    }
  };

  deleteItem = (elem) => {
    const {array} = this.state;
    const newArray = array.filter(item => {
       return item !== elem
     });
     this.setState({
       array: newArray
     });
     TOTAL_COST = Number(TOTAL_COST) - Number(elem.price);
  };

  handleChangeModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
    console.log(this.state);
  };

  render() {
    console.log('IS_OPEN',this.state.isOpen);
    const {array} = this.state;
    return (
        <div style={{marginTop:'70px'}}>
          <div style={{marginLeft: '90%'}}>
            <Link to='/'>ВЫЙТИ</Link>
          </div>
          <Modal
              isOpen={this.state.isOpen}
              addItem={this.addItem}
              handleChangeModal={this.handleChangeModal}
              item={this.state.item}
              array={this.state.array}
              TOTAL_COST={TOTAL_COST}/>
            <form>
              <input
                  id="addButton"
                  type="button"
                  value="Добавить"
                  onClick={this.handleChangeModal}/>
            </form>
          {console.log('FORM_ARRAY_LENGTH', array.length)}
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
                          {typeof this.state.item.pictures !== 'undefined' && this.state.item.pictures.map((picture) => {
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