import React, { Component } from "react";
import "../Authorization.css";
import { Link } from "react-router-dom";

class Authorization extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("/accounting");
  }

  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail
            </label>
            <p>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Введите вашу почту"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </p>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Пароль:
            </label>
            <p>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Введите ваш пароль"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </p>
          </div>

          <div className="FormField">
            <button type="submit" className="FormField__Button mr-20">
              <Link to="/accounting/">Войти</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Authorization;
