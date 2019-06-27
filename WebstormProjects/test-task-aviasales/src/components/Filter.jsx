import React from "react";
import "../styles/Filter.css";
import {connect} from "react-redux";
import {setCurrency, setTransfer} from "../actions/filterActions";

class Filter extends React.Component {
  onBtnUsdClick = () => {
    const currency = "USD";
    this.props.setCurrency(currency);
  };

  onBtnRubClick = () => {
    const currency = "RUB";
    this.props.setCurrency(currency);
  };

  onBtnEurClick = () => {
    const currency = "EUR";
    this.props.setCurrency(currency);
  };

  onCheckBoxAllClick = () => {
    const array = this.props.filter.transfer;
    array[0] = !array[0];
    this.props.setTransfer(array);
  };

  onCheckBoxWithoutClick = () => {
    const array = this.props.filter.transfer;
    array[1] = !array[1];
    this.props.setTransfer(array);
  };

  onCheckBoxOneClick = () => {
    const array = this.props.filter.transfer;
    array[2] = !array[2];
    this.props.setTransfer(array);
  };

  onCheckBoxTwoClick = () => {
    const array = this.props.filter.transfer;
    array[3] = !array[3];
    this.props.setTransfer(array);
  };

  onCheckBoxThreeClick = () => {
    const array = this.props.filter.transfer;
    array[4] = !array[4];
    this.props.setTransfer(array);
  };

  render() {
    console.log(this.props);
    return (
      <div className="filter-tickets">
        <div className="choice-currency">
          <div className="label-currency">ВАЛЮТА</div>
          <button className="button-rub" onClick={this.onBtnRubClick}>
            RUB
          </button>
          <button className="button-usd" onClick={this.onBtnUsdClick}>
            USD
          </button>
          <button className="button-eur" onClick={this.onBtnEurClick}>
            EUR
          </button>
        </div>
        <div className="choice-transfer">
          <div className="label-transfer">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          <label className="container">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={this.onCheckBoxAllClick}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">Все</p>
          </label>
          <label className="container">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={this.onCheckBoxWithoutClick}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">Без пересадок</p>
          </label>
          <label className="container">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={this.onCheckBoxOneClick}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">1 пересадка</p>
          </label>
          <label className="container">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={this.onCheckBoxTwoClick}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">2 пересадки</p>
          </label>
          <label className="container">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={this.onCheckBoxThreeClick}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">3 пересадки</p>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('STORE', store);
  return {
    filter: store.filter,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    setTransfer: (transfer) => dispatch(setTransfer(transfer))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
