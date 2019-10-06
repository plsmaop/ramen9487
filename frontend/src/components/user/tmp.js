import React, { Component } from 'react';
import './style.css';

export default class LoginPanel extends Component {
  constructor(props){
    super(props);

    this.handleSignClick = this.handleSignClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleSignClick() {
    const element = this.refs.form;
    element.classList.remove('bounceRight');
    element.classList.add('bounceLeft');
  }

  handleLoginClick() {
    const element = this.refs.form;
    element.classList.remove('bounceLeft');
    element.classList.add('bounceRight');
  }

  render(){
    return(
      <div className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">Join us to keep your own Ramen Diary and become a Ramen Connoisseur !</p>
              <button ref="element" className="user_unregistered-signup" id="signup-button" onClick={this.handleSignClick}>Sign up</button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <button ref="element" className="user_registered-login" id="login-button" onClick={this.handleLoginClick}>Login</button>
            </div>
          </div>
          
          <div ref="form" className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="submit" value="Log In" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Repeat Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}










/* 

<div className="login">
<div className="wrap">
    
    <div id="toggle-wrap">
        <div id="toggle-terms">
            <div id="cross">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

    
    <div className="recovery">
        <h2>Password Recovery</h2>
        <p>Enter either the <strong>email address</strong> or <strong>username</strong> on the account and <strong>click Submit</strong></p>
        <p>We'll email instructions on how to reset your password.</p>
        <form className="recovery-form" action="" method="post">
            <input type="text" className="input" id="user_recover" placeholder="Enter Email or Username Here"/>
            <input type="submit" className="button" value="Submit"/>
        </form>
        <p className="mssg">An email has been sent to you with further instructions.</p>
    </div>

    
    <div className="content">

        <div className="logo">
            <a href="#"><img src="http://res.cloudinary.com/dpcloudinary/image/upload/v1506186248/logo.png" alt=""/></a>
        </div>

        <div id="slideshow">
            <div className="one">
                <h2><span>EVENTS</span></h2>
                <p>Sign up to attend any of hundreds of events nationwide</p>
            </div>
            <div className="two">
                <h2><span>LEARNING</span></h2>
                <p>Thousands of instant online classes/tutorials included</p>
            </div>
            <div className="three">
                <h2><span>GROUPS</span></h2>
                <p>Create your own groups and connect with others that share your interests</p>
            </div>
            <div className="four">
                <h2><span>SHARING</span></h2>
                <p>Share your works and knowledge with the community on the public showcase section</p>
            </div>
        </div>
    </div>

    <div className="user">

        <div className="actions">
            <a className="help" href="#signup-tab-content">Sign Up</a><a className="faq" href="#login-tab-content">Login</a>
        </div>

        <div className="form-wrap">

          <div className="tabs">
                <h3 className="login-tab"><a className="log-in active" href="#login-tab-content"><span>Login</span></a></h3>
            <h3 className="signup-tab"><a className="sign-up" href="#signup-tab-content"><span>Sign Up</span></a></h3>
          </div>

          <div className="tabs-content">

            <div id="login-tab-content" class="active">
              <form className="login-form" action="" method="post">
                <input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username"/>
                <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"/>
                <input type="checkbox" className="checkbox" checked id="remember_me"/>
                <label htmlFor="remember_me">Remember me</label>
                <input type="submit" className="button" value="Login"/>
              </form>
              <div className="help-action">
                <p><i class="fa fa-arrow-left" aria-hidden="true"></i><a class="forgot" href="#">Forgot your password?</a></p>
              </div>
            </div>

            <div id="signup-tab-content">
              <form className="signup-form" action="" method="post">
                <input type="email" className="input" id="user_email" autocomplete="off" placeholder="Email"/>
                <input type="text" className="input" id="user_name" autocomplete="off" placeholder="Username"/>
                <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"/>
                <input type="submit" className="button" value="Sign Up"/>
              </form>
              <div className="help-action">
                <p>By signing up, you agree to our</p>
                <p><i className="fa fa-arrow-left" aria-hidden="true"></i><a class="agree" href="#">Terms of service</a></p>
              </div>
            </div>
          </div>
      </div>
    </div>
</div>
</div>

*/




loginPanel v2



@media screen and (min-width: 40em) {
  body {
    font-size: 1.25em;
  }
}

.loginPanel-form .label, .loginPanel-form .checkbox-input + label, .loginPanel-form .option-input + label, .loginPanel-form .text-input, .loginPanel-form .textarea, .loginPanel-form .select, .customSelect, .loginPanel-form .message, .loginPanel-form .button {
  padding: 0.75em 1em;
  appearance: none;
  outline: none;
  line-height: normal;
  border-radius: 0;
  border: none;
  background: none;
  display: block;
}

.loginPanel-form .label {
  font-weight: bold;
  color: white;
  padding-top: 0;
  padding-left: 0;
  letter-spacing: 0.025em;
  font-size: 1.125em;
  line-height: 1.25;
  position: relative;
  z-index: 100;
}
.required .loginPanel-form .label:after, .loginPanel-form .required .label:after {
  content: " *";
  color: #E8474C;
  font-weight: normal;
  font-size: 0.75em;
  vertical-align: top;
}

.loginPanel-form .checkbox-input + label, .loginPanel-form .option-input + label, .loginPanel-form .text-input, .loginPanel-form .textarea, .loginPanel-form .select, .customSelect {
  font: inherit;
  line-height: normal;
  width: 100%;
  box-sizing: border-box;
  background: #222222;
  color: white;
  position: relative;
}
.loginPanel-form .checkbox-input + label:placeholder, .loginPanel-form .option-input + label:placeholder, .floginPanel-orm .text-input:placeholder, .loginPanel-form .textarea:placeholder, .loginPanel-form .select:placeholder, .customSelect:placeholder {
  color: white;
}
.loginPanel-form .checkbox-input + label:-webkit-autofill, .loginPanel-form .option-input + label:-webkit-autofill, .loginPanel-form .text-input:-webkit-autofill, .loginPanel-form .textarea:-webkit-autofill, .loginPanel-form .select:-webkit-autofill, .customSelect:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #111111 inset;
  -webkit-text-fill-color: white;
  border-top-color: #111111;
  border-left-color: #111111;
  border-right-color: #111111;
}
.loginPanel-form .checkbox-input + label:not(:focus):not(:active).error, .loginPanel-form .option-input + label:not(:focus):not(:active).error, .loginPanel-form .text-input:not(:focus):not(:active).error, .loginPanel-form .textarea:not(:focus):not(:active).error, .loginPanel-form .select:not(:focus):not(:active).error, .customSelect:not(:focus):not(:active).error, .error .loginPanel-form .checkbox-input + label:not(:focus):not(:active), .loginPanel-form .error .checkbox-input + label:not(:focus):not(:active), .error .loginPanel-form .option-input + label:not(:focus):not(:active), .loginPanel-form .error .option-input + label:not(:focus):not(:active), .error .loginPanel-form .text-input:not(:focus):not(:active), .loginPanel-form .error .text-input:not(:focus):not(:active), .error .loginPanel-form .textarea:not(:focus):not(:active), .loginPanel-form .error .textarea:not(:focus):not(:active), .error .loginPanel-form .select:not(:focus):not(:active), .loginPanel-form .error .select:not(:focus):not(:active), .error .customSelect:not(:focus):not(:active) {
  background-size: 8px 8px;
  background-image: linear-gradient(135deg, rgba(232, 71, 76, 0.5), rgba(232, 71, 76, 0.5) 25%, transparent 25%, transparent 50%, rgba(232, 71, 76, 0.5) 50%, rgba(232, 71, 76, 0.5) 75%, transparent 75%, transparent);
  background-repeat: repeat;
}
.loginPanel-form:not(.has-magic-focus) .checkbox-input + label:active, .loginPanel-form:not(.has-magic-focus) .option-input + label:active, .loginPanel-form:not(.has-magic-focus) .text-input:active, .loginPanel-form:not(.has-magic-focus) .textarea:active, .loginPanel-form:not(.has-magic-focus) .select:active, .loginPanel-form:not(.has-magic-focus) .customSelect:active, .loginPanel-form:not(.has-magic-focus) .customSelect.customSelectFocus, .loginPanel-form:not(.has-magic-focus) .checkbox-input + label:focus, .loginPanel-form:not(.has-magic-focus) .option-input + label:focus, .loginPanel-form:not(.has-magic-focus) .text-input:focus, .loginPanel-form:not(.has-magic-focus) .textarea:focus, .loginPanel-form:not(.has-magic-focus) .select:focus, .loginPanel-form:not(.has-magic-focus) .customSelect:focus {
  background: #4E4E4E;
}

.loginPanel-form .message {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  font-size: 0.625em;
  color: white;
}

.loginPanel-form .checkbox-input, .loginPanel-form .option-input {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.loginPanel-form .checkbox-input + label, .loginPanel-form .option-input + label {
  display: inline-block;
  width: auto;
  color: #4E4E4E;
  position: relative;
  user-select: none;
  cursor: pointer;
}
.loginPanel-form .checkbox-input:focus + label, .loginPanel-form .option-input:focus + label, .loginPanel-form .checkbox-input:active + label, .loginPanel-form .option-input:active + label {
  color: #4E4E4E;
}
.loginPanel-form .checkbox-input:checked + label, .loginPanel-form .option-input:checked + label {
  color: white;
}

.loginPanel-form .button {
  font: inherit;
  line-height: normal;
  cursor: pointer;
  background: #E8474C;
  color: white;
  font-weight: bold;
  width: auto;
  margin-left: auto;
  font-weight: bold;
  padding-left: 2em;
  padding-right: 2em;
}
.loginPanel-form .button:hover, .loginPanel-form .button:focus, .loginPanel-form .button:active {
  color: white;
  border-color: white;
}
.loginPanel-form .button:active {
  position: relative;
  top: 1px;
  left: 1px;
}

body {
  padding: 2em;
}

.loginPanel-form {
  max-width: 40em;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
}
.loginPanel-form .field {
  width: 100%;
  margin: 0 0 1.5em 0;
}
@media screen and (min-width: 40em) {
  .loginPanel-form .field.half {
    width: calc(50% - 1px);
  }
}
.loginPanel-form .field.last {
  margin-left: auto;
}
.loginPanel-form .textarea {
  max-width: 100%;
}
.loginPanel-form .select {
  text-indent: 0.01px;
  text-overflow: "" !important;
}
.loginPanel-form .select::-ms-expand {
  display: none;
}
.loginPanel-form .checkboxes, .loginPanel-form .options {
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
}
.loginPanel-form .checkbox, .loginPanel-form .option {
  float: left;
  margin: 1px;
}

.customSelect {
  pointer-events: none;
}
.customSelect:after {
  content: "";
  pointer-events: none;
  width: 0.5em;
  height: 0.5em;
  border-style: solid;
  border-color: white;
  border-width: 0 3px 3px 0;
  position: absolute;
  top: 50%;
  margin-top: -0.625em;
  right: 1em;
  transform-origin: 0 0;
  transform: rotate(45deg);
}
.customSelect.customSelectFocus:after {
  border-color: white;
}

.magic-focus {
  position: absolute;
  z-index: 0;
  width: 0;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.15);
  transition: top 0.2s, left 0.2s, width 0.2s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: top, left, width;
  transform-origin: 0 0;
}



export default class LoginPanel extends Component {
  
  render(){
    return(
        <div>
          <div className="pen-title">
              <h1>Material Login Form</h1><span>Pen <i className='fa fa-code'></i> by <a href='http://andytran.me'>Andy Tran</a></span>
          </div>
          <div className="loginPanel-container">
              <div className="card"></div>
              <div className="card">
                  <h1 className="loginPanel-title">Login</h1>
                  <form className="loginPanel-form">
                      <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label htmlFor="#{label}">Username</label>
                          <div className="bar"></div>
                      </div>
                      <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label htmlFor="#{label}">Password</label>
                          <div className="bar"></div>
                      </div>
                      <div className="button-container"><button><span>Go</span></button></div>
                      <div className="footer"><a href="#">Forgot your password?</a></div>
                  </form>
              </div>
              <div className="card alt">
                  <div className="toggle"></div>
                  <h1 className="loginPanel-title">Register
                      <div className="close"></div>
                  </h1>
                  <form className="loginPanel-form">
                      <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label htmlFor="#{label}">Username</label>
                          <div className="bar"></div>
                      </div>
                      <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label htmlFor="#{label}">Password</label>
                          <div className="bar"></div>
                      </div>
                      <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label htmlFor="#{label}">Repeat Password</label>
                          <div className="bar"></div>
                      </div>
                      <div className="button-container"><button><span>Next</span></button></div>
                  </form>
              </div>
          </div>
        </div>
    )
  }
}





loginPanel v1

export default class LoginPanel extends Component {
  constructor(props){
    super(props);

    this.handleSignClick = this.handleSignClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleSignClick() {
    const element = this.refs.form;
    element.classList.remove('bounceRight');
    element.classList.add('bounceLeft');
  }

  handleLoginClick() {
    const element = this.refs.form;
    element.classList.remove('bounceLeft');
    element.classList.add('bounceRight');
  }

  render(){
    return(
      <div className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">Join us to keep your own Ramen Diary and become a Ramen Connoisseur !</p>
              <button ref="element" className="user_unregistered-signup" id="signup-button" onClick={this.handleSignClick}>Sign up</button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <button ref="element" className="user_registered-login" id="login-button" onClick={this.handleLoginClick}>Login</button>
            </div>
          </div>
          
          <div ref="form" className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="submit" value="Log In" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Repeat Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


input {
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: 0;
}
input[type="submit"] {
  cursor: pointer;
}
input::placeholder {
  font-size: 0.85rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: #ccc;
}

/**
 * Bounce to the left side
 */
@keyframes bounceLeft {
  0% {
    transform: translate3d(100%, -50%, 0);
  }
  50% {
    transform: translate3d(-30px, -50%, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}
/**
 * Bounce to the left side
 */
@keyframes bounceRight {
  0% {
    transform: translate3d(0, -50%, 0);
  }
  50% {
    transform: translate3d(calc(100% + 30px), -50%, 0);
  }
  100% {
    transform: translate3d(100%, -50%, 0);
  }
}
/**
 * Show Sign Up form
 */
@keyframes showSignUp {
  100% {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
}
/**
 * Page background
 */
.user {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

}
.user_options-container {
  position: relative;
  width: 80%;
  margin-right: 10%;
}
.user_options-text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(34, 34, 34, 0.85);
  border-radius: 3px;
}

/**
 * Registered and Unregistered user box and text
 */
.user_options-registered,
.user_options-unregistered {
  width: 50%;
  padding: 75px 45px;
  color: #fff;
  font-weight: 300;
}

.user_registered-title,
.user_unregistered-title {
  margin-bottom: 15px;
  font-size: 1.66rem;
  line-height: 1em;
}

.user_unregistered-text,
.user_registered-text {
  font-size: 0.83rem;
  line-height: 1.4em;
}

button:focus {outline:0;}

.user_registered-login,
.user_unregistered-signup {
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px 30px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 0.2rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background: transparent;
  overflow: hidden;
}
.user_registered-login:hover,
.user_unregistered-signup:hover {
  color: rgba(34, 34, 34, 0.85);
  background-color: #ccc;
}

/**
 * Login and signup forms
 */
.forms_fieldset{
  border: none;
}

.forms_buttons-forgot{
  border: none;
}

.user_options-forms {
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 420px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transform: translate3d(100%, -50%, 0);
  transition: transform 0.4s ease-in-out;
}
.user_options-forms .user_forms-login {
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}
.user_options-forms .forms_title {
  margin-bottom: 3%;
  margin-top: 10%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1em;
  text-transform: uppercase;
  color: #e8716d;
  letter-spacing: 0.1rem;
}
.user_options-forms .forms_field:not(:last-of-type) {
  margin-bottom: 20px;
}
.user_options-forms .forms_field-input {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 6px 20px 6px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: gray;
  letter-spacing: 0.1rem;
  transition: border-color 0.2s ease-in-out;
}
.user_options-forms .forms_field-input:focus {
  border-color: gray;
}
.user_options-forms .forms_buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
}
.user_options-forms .forms_buttons-forgot {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;
  color: #ccc;
  text-decoration: underline;
  transition: color 0.2s ease-in-out;
}
.user_options-forms .forms_buttons-forgot:hover {
  color: #b3b3b3;
}
.user_options-forms .forms_buttons-action {
  background-color: #e8716d;
  border-radius: 3px;
  padding: 10px 35px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: background-color 0.2s ease-in-out;
}
.user_options-forms .forms_buttons-action:hover {
  background-color: #e14641;
}
.user_options-forms .user_forms-signup,
.user_options-forms .user_forms-login {
  position: absolute;
  top: 3%;
  left: 40px;
  width: calc(100% - 80px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out;
}
.user_options-forms .user_forms-signup {
  transform: translate3d(120px, 0, 0);
}
.user_options-forms .user_forms-signup .forms_buttons {
  justify-content: flex-end;
}
.user_options-forms .user_forms-login {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  visibility: visible;
}

/**
 * Triggers
 */
.user_options-forms.bounceLeft {
  animation: bounceLeft 1s forwards;
}
.user_options-forms.bounceLeft .user_forms-signup {
  animation: showSignUp 1s forwards;
}
.user_options-forms.bounceLeft .user_forms-login {
  opacity: 0;
  visibility: hidden;
  transform: translate3d(-120px, 0, 0);
}
.user_options-forms.bounceRight {
  animation: bounceRight 1s forwards;
}

/**
 * Responsive 990px
 */
@media screen and (max-width: 990px) {
  .user_options-forms {
    min-height: 350px;
  }
  .user_options-forms .forms_buttons {
    flex-direction: column;
  }
  .user_options-forms .user_forms-login .forms_buttons-action {
    margin-top: 30px;
  }
  .user_options-forms .user_forms-signup,
  .user_options-forms .user_forms-login {
    top: 40px;
  }

  .user_options-registered,
  .user_options-unregistered {
    padding: 50px 45px;
  }
}



