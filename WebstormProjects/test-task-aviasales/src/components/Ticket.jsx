import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../styles/Ticket.css'
import logo from '../static/images/dddb6e70e25fdd6553238ce7aecfa37661376fbb.png'
import plane from '../static/images/plane-silhouette-grey.svg'
import {setCurrency} from "../actions/filterActions";
import {setTickets} from "../actions/ticketActions";
import {connect} from "react-redux";

class Ticket extends Component {

  converterCurrency = (currency, price) => {
    switch (currency) {
      case 'EUR':
        return {newCurrency: '€', newPrice: Math.round(price / 71)};
      case 'USD':
        return {newCurrency: '$', newPrice: Math.round(price / 62)};
      case 'RUB':
        return {newCurrency: '₽', newPrice: price}
    }
  };

  filterTranser = () => {
    const { tickets, filter } = this.props;
    let filterTickets = [];
    if (filter.transfer[0] === true)
    {
      return tickets.ticketsList;
    }
    if (filter.transfer[1] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 0;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[2] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 1;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[3] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 2;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[4] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 3;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (
        filter.transfer[0] === false &&
        filter.transfer[1] === false &&
        filter.transfer[2] === false &&
        filter.transfer[3] === false &&
        filter.transfer[4] === false)
    {
      return tickets.ticketsList;
    }
    return filterTickets;
  };

  render() {
    const { filter} = this.props;
    let filteredTickets = this.filterTranser();
    console.log(filteredTickets);
    let filterTickets = filteredTickets.slice();
    return (
        <div className='ticket-list'>
          {filterTickets.map ((item) => {
            const convert = this.converterCurrency(filter.currency, item.price);
            return (
                <div className='ticket'>
                  <div className='logo-with-button'>
                    <div className='logo'>
                      <img src={logo} alt='logo' width="130px"/>
                    </div>
                    <button className='button-buy'>КУПИТЬ
                    <div>ЗА {convert.newPrice} {convert.newCurrency}</div></button>
                  </div>
                  <div className='info-ticket'>
                    <div className='from'>
                      <div className='time'>{item.departure_time}</div>
                      <div className='destination'>
                        <span className='origin'>{item.origin},</span>
                        <span className='origin-name'> {item.origin_name}</span>
                      </div>
                      <div className='departure-date'>{item.departure_date}</div>
                    </div>
                    <div className='transfer'>
                      {
                        item.stops === 0 && <a></a>
                      }
                      { item.stops === 1 &&
                      <a>{item.stops} ПЕРЕСАДКА</a>
                      }
                      {
                        item.stops > 1 &&
                        <a>{item.stops} ПЕРЕСАДКИ</a>
                      }
                      <div className='line-with-plane'>
                        <hr className='line'/>
                        <img className='plane' src={plane}/>
                      </div>
                    </div>
                    <div className='to'>
                      <div className='time'>{item.arrival_time}</div>
                      <div className='destination'>
                        <span className='origin-name'> {item.destination_name}, </span>
                        <span className='origin'>{item.destination}</span>
                      </div>
                      <div className='arrival-date'>{item.arrival_date}</div>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    filter: store.filter,
    tickets: store.tickets
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrencyAction: (currency) => dispatch(setCurrency(currency)),
    setTicketsAction: (data) => dispatch(setTickets(data)),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ticket)