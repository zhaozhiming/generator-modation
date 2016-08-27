import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainActions from './actions';
import Name from 'components/Name';
import Header from './components/Header';
import Message from './components/Message';
import cat from 'images/cat.jpg';


function mapStateToProps(state) {
  const { main } = state;
  return { main };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(MainActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {
  static propTypes = {
    main: PropTypes.object.isRequired,
    mainActions: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    main: PropTypes.object,
    mainActions: PropTypes.object,
  };

  getChildContext() {
    const { main, mainActions } = this.props;
    return { main, mainActions };
  }

  render() {
    const { name, message } = this.props.main.toJS();
    return (
      <div className={style.content}>
        <Header />
        <div className={style.main} >
          <Name name={name} mainActions={this.props.mainActions} />
          <Message message={message} />
          <img className={style.cat} src={cat} alt="demo" />
        </div>
      </div>
    );
  }
}

export default Main;
