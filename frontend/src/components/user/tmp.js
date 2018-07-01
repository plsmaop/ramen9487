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