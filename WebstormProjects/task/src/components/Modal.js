import React, {Component} from 'react';
import '../Modal.css';

class Modal extends Component {
  state = {
    array: [],
    item: {
      id: 0,
      text: '',
      price: 0
    }

  };
  myRef = React.createRef();
  handleCloseModal = () => {
    console.log(this.props);
    this.props.handleChangeModal();
  };

  changeHandlerProduct = e => {
    if (e.target.value !== '') {
      this.setState({item: {...this.state.item, text: e.target.value}});
    }
  };

  changeHandlerPrice = e => {
    if (e.target.value !== '') {
      console.log(e.target.value);
      this.setState({item: {...this.state.item, price: e.target.value}});
      console.log(this.state.item)
    }
  };

  addProductPrice = () => {
    const {array, item} = this.state;
    if (item.price !== 0 && item.text !== '') {
      array.push(item);
      this.setState({array: array, item: {...this.state.item, id: this.state.item.id + 1}});
    }
  };

  handleSubmit = () => {
    const { text, price, id } = this.state.item;
    console.log('HANDLE_SUBMIT', this.state.item);
    this.props.addItem(text, price, id);
    this.handleCloseModal();
  };

  componentDidMount() {

  }

  handleOnClick = (e) => {
    console.log('EVENT', e.target);
    console.log('MYREF', this.myRef.current);
    if (e.target.id === 'myModal'){
      const  modal = document.getElementById('myModal');
      modal.style.display = 'none';
      this.props.handleChangeModal();
    }
  };

  render() {
     return (
         this.props.isOpen &&
         <div
             id='myModal'
             className='modal'
             style={{display: 'block'}}
             onClick={(e) => this.handleOnClick(e)}>
          <div className='modal-content' ref={this.myRef}>
            <form onSubmit={this.handleSubmit}>
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
                type="submit"
                value="Добавить"
                onClick={this.addProductPrice}/>
              <span className='close' onClick={this.handleCloseModal}>&times;</span>
            </form>
          </div>
        </div>
    );
  }
}

export default Modal;