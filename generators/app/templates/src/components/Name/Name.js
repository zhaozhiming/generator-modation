import { Button, Input } from 'antd';
import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Name extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    mainActions: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNormalClick = this.handleNormalClick.bind(this);
<% if (serverSide) { -%>
    this.handleRandomClick = this.handleRandomClick.bind(this);
<% } -%>
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleNormalClick() {
    this.props.mainActions.changeName(this.state.name);
  }

<% if (serverSide) { -%>
  handleRandomClick() {
    this.props.mainActions.randomName(1);
  }
<% } -%>

  render() {
    const { name } = this.state;
    return (
      <div className={style.name}>
        <span>Name: {this.props.name}</span>
        <Input className={style.label} value={name} onChange={this.handleChange} />
        <Button onClick={this.handleNormalClick} >Change Name</Button>
<% if (serverSide) { -%>
        <Button onClick={this.handleRandomClick} >Random Name</Button>
<% } -%>
      </div>
    );
  }
}


export default Name;
