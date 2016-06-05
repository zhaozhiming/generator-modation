import style from './style.css';
import React, { Component, PropTypes } from 'react';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.title,
    };
  }

  render() {
    return (
      <div className={style.header}>
        <span className={style.title}>Hello {this.state.title}</span>
      </div>
    );
  }
}

export default Header;
