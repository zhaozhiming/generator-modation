<% if (enableCssModules) { %>
import style from './style.css';
<% } %>

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';


@connect(mapStateToProps, mapDispatchToProps)
class <%= containerName %> extends Component {
  static propTypes = {
    state: Proptypes.object.isRequired,
    actions: Proptypes.object.isRequired,
  };

  static defaultProps = {
  };

  state = {};

  render() {
    return <div><%= containerName %></div>;
  }
}

function mapStateToProps(state) {
  return {
    state: state.<%= containerName %>,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default <%= containerName %>;
