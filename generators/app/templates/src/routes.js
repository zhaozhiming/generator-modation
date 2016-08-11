// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from 'containers/Main';

export function createRoutes() {
  return {
    path: '/',
    component: Main,
  };
}
