import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Message from 'containers/Foo/components/Message';

const props = {
  message: 'foo',
};

const context = {
  fooActions: {
    changeMessage: sinon.spy(),
  }
};

describe('Message component', () => {
  it('should render correctly', () => {
    const wrap = shallow(<Message {...props} />);
    expect(wrap.find('span').length).to.be.equal(1);
    expect(wrap.find('span').text()).to.be.equal('Message: foo');
    expect(wrap.find('input').length).to.be.equal(1);
    expect(wrap.find('button').length).to.be.equal(1);
  });

  it('should button click correctly', () => {
    const wrap = shallow(<Message {...props} />, { context });
    wrap.setState({ message: 'bar' });
    wrap.find('button').simulate('click');
    expect(context.fooActions.changeMessage.callCount).to.be.equal(1);
    expect(wrap.state('message')).to.be.equal('bar');
  });

  it('should input change correctly', () => {
    const wrap = shallow(<Message {...props} />);
    wrap.find('input').simulate('change', { target: { value: 'bar' } });
    expect(wrap.state('message')).to.be.equal('bar');
  });
});
