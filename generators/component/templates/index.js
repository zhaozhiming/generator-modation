<% if (enableCssModules) { %>
import style from './style.css';
<% } %>
import React, { Component, PropTypes } from 'react';


class <%= componentName %> extends Component {
  static propTypes = {
  };

  state = {};

  render() {
    return (
      <div><%= componentName %></div>
    );
  }
}

export default <%= componentName %>;
