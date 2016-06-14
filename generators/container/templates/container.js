<% if (enableCssModules) { %>
import style from './style.css';
<% } %>

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';


function mapStateToProps(state) {
  return {
    state: state.<%= containerName.toLowerCase() %>,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class <%= containerName %> extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  state = {};

  render() {
    return <div><%= containerName %></div>;
  }
}

export default <%= containerName %>;
