import React, { Component } from 'react';
import './style.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleRegisterClick() {
    const el = findDOMNode(this.refs.register);
    $(el).animate({height: "toggle", opacity: "toggle"}, "slow");
    this.refs.login.style.display = "none";
  }

  handleLoginClick() {
    const el = findDOMNode(this.refs.login);
    $(el).animate({height: "toggle", opacity: "toggle"}, "slow");
    this.refs.register.style.display = "none";
  }

  render(){
    return(
      <div>
        <div className="login-container">
        <div className="info">
            <h1>Login </h1><span className="login-banner">Join us to keep your own Ramen Diary and become a Ramen Connoisseur ! <i className="fa fa-heart"></i></span></div>
        </div>
        <div  className="form">
            <div className="thumbnail"><div className="login-ramen" ></div></div>
            <form ref="register" className="register-form"><input type="text" placeholder="username" /><input type="password" placeholder="password" /><input type="text" placeholder="email address" /><button>create</button>
                <p className="message">Already registered? <div className="to-login"  onClick={this.handleLoginClick}>Sign In</div></p>
            </form>
            <form ref="login" className="login-form"><input type="text" placeholder="username" /><input type="password" placeholder="password" /><button>login</button>
                <p className="message">Not registered? <div className="to-register" onClick={this.handleRegisterClick}>Create an account</div></p>
            </form>
        </div>
      </div>
    )
  }
}






