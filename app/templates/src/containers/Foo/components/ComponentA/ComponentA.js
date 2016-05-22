import style from './style.css';

import React, { Component, PropTypes } from 'react';


class ComponentA extends Component {
  render() {
    return (
      <div className={style.message}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

ComponentA.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ComponentA;
