if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: '/<%= containerName %>',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, <%= containerName %>, require('./reducer').default);

        cb(null, require('./<%= containerName %>').default);
      });
    },
  };
}
