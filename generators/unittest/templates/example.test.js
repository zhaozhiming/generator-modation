import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

const props = {
  someProperty: 'foo',
};

const context = {
  fooActions: {
    someMethod: sinon.spy(),
  },
};

describe('<%= component %> component', () => {
  it('should render correctly', () => {
    const wrap = shallow(<<%= component %> {...props} />);
    expect(wrap.find('span').length).to.be.equal(1);
  });
});
