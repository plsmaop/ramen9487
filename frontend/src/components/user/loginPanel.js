import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import $ from 'jquery';
import ButtonProgress from '../buttonProgress';

class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rname: '',
      rpass: '',
      remail: '',
      redirect: false,
    };
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogin) {
      setTimeout(() => this.setState({ redirect: true }), 2000);
    }
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
  handleInputChange(type, e) {
    const newState = {};
    newState[type] = e.target.value;
    this.setState(newState);
  }
  render() {
    const {
      username, password, rname, rpass,
      remail, redirect,
    } = this.state;
    const { handleInputChange } = this;
    const { userLogin, userRegister, isLogin } = this.props;
    console.log(this.props);
    if (redirect || isLogin) return (<Redirect to="/" />); 
    return(
      <div className="login-page">
        <div className="login-container">
          <div className="info">
            <h1>Login</h1>
            <span className="login-banner">Join us to keep your own Ramen Diary and become a Ramen Connoisseur ! <i className="fa fa-heart"></i></span></div>
          </div>
        <div className="form">
          <div className="thumbnail"><div className="login-ramen" ></div></div>
          <form ref="register" className="register-form">
            <input type="text" placeholder="username" value={rname} onChange={(e) => handleInputChange('rname', e)}/>
            <input type="password" placeholder="password" value={rpass} onChange={(e) => handleInputChange('rpass', e)}/>
            <input type="text" placeholder="email address" value={remail} onChange={(e) => handleInputChange('remail', e)}/>
            <button onClick={() => userRegister(rname, rpass, remail)}>create</button>
            <p className="message">Already registered? <div className="to-login"  onClick={this.handleLoginClick}>Sign In</div></p>
          </form>
          <form ref="login" className="login-form">
            <input type="text" placeholder="username" value={username} onChange={(e) => handleInputChange('username', e)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => handleInputChange('password', e)} />
            <ButtonProgress style={{marginLeft: -50}} color="#FFEB3B" type="login" handleClick={() => userLogin(username, password)} />
            <p className="message">Not registered? <div className="to-register" onClick={this.handleRegisterClick}>Create an account</div></p>
          </form>
        </div>
      </div>
    );
  }
}

// onClick={() => userLogin(username, password)}<button >login</button>
// <ButtonProgress style={{'!important paddingLeft': 0}}color="#FFEB3B" type="login" handleClick={() => userLogin(username, password)} />
LoginPanel.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userRegister: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default LoginPanel;
