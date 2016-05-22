import style from './style.css';
import React, { Component, PropTypes } from 'react';

class Component1 extends Component {
  render() {
    return (
      <div className={style.title}>
        <span>{ this.props.title }</span>
      </div>
    );
  }
}

Component1.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Component1;
