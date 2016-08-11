import { expect } from 'chai';
import main from 'containers/Main/reducer';
import * as at from 'constants/actionTypes';
import immutable from 'immutable';

describe('main reducer', () => {
  it('should change name correctly', () => {
    const result = main(immutable.fromJS({}), {
      type: at.CHANGE_NAME,
      name: 'bar',
    });
    expect(result.get('name')).to.be.equal('bar');
  });
});
