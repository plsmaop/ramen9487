import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import { actions } from '../redux/globalModule';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      snackBarOpen: false,
    };
    this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
  }
  
  componentDidMount() {
    this.props.userAuth();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reqMsg.content !== this.props.reqMsg.content) {
      this.setState({ snackBarOpen: true });
      setTimeout(() => this.setState({ snackBarOpen: false }), 1500);
    }
  }

  handleSnackBarClose() {
    this.setState({ snackBarOpen: false });
  }

  render() {
    const { isFetching, reqMsg } = this.props;
    const { snackBarOpen } = this.state;
    return (
      <div>
        <ul id="menu">
          <Link to="/"><li className="icon" id="home"></li></Link>
          <Link to="/search"><li className="icon" id="search"></li></Link>
          <Link to="/login"><li className="icon" id="ranking"></li></Link>
          <Link to="/addform"><li className="icon" id="user"></li></Link>
        </ul>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={snackBarOpen && reqMsg.content.length > 0 && !isFetching}
          onClose={this.handleSnackBarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{reqMsg.content}</span>}
        />
      </div>
    );
  }
}

Menu.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userAuth: PropTypes.func.isRequired,
  reqMsg: PropTypes.shape({
    content: PropTypes.string.isRequired,
    isReqSuccess: PropTypes.bool.isRequired,
  }).isRequired,
};

const { userAuth } = actions;
const mapStateToProps = state => ({
  isFetching: state.global.isFetching,
  reqMsg: state.global.msg,
});

export default connect(mapStateToProps, { userAuth })(Menu);

/*
        <Link to="/"><li className="icon" id="home"></li></Link>
        <Link to="/search"><li className="icon" id="search"></li></Link>
        <Link to="/login"><li className="icon" id="ranking"></li></Link>
        <Link to="/addform"><li className="icon" id="user"></li></Link>

          <a href="#t1"><li className="icon" id="home"></li></a>
          <a href="#t2"><li className="icon" id="search"></li></a>
          <a href="#t3"><li className="icon" id="ranking"></li></a>
          <a href="#t4"><li className="icon" id="user"></li></a>
*/
