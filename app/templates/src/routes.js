// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import _ from 'lodash';
import Foo from 'containers/Foo';

export function createRoutes(store) {
  const root = {
    path: '/',
    component: Foo,
  };

  return {
    childRoutes: [root],
  };
}
