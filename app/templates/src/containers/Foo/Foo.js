import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FooActions from 'containers/actions';
import Component1 from 'components/Component1';
import ComponentA from './components/ComponentA';


function mapStateToProps(state) {
  const { foo } = state;
  return { foo };
}

function mapDispatchToProps(dispatch) {
  return {
    fooActions: bindActionCreators(FooActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Foo extends Component {
  render() {
    const { name, message } = this.props.foo;
    return (
      <div className={style.main}>
        <Component1 name={name}/>
        <ComponentA message={message}/>
      </div>
    );
  }
}

Foo.propTypes = {
  foo: PropTypes.object.isRequired,
  fooActions: PropTypes.object.isRequired,
};

Foo.childContextTypes = {
  foo: PropTypes.object.isRequired,
  fooActions: PropTypes.object.isRequired,
}

export deafult Foo;
