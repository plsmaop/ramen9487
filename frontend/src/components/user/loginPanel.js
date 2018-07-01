import React, { Component } from 'react';

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
      <section className="user">
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
      </section>
    )
  }
}





