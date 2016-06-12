if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: '<%= containerName.toLowerCase() %>',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, '<%= containerName.toLowerCase() %>', require('./reducer').default);

        cb(null, require('./<%= containerName %>').default);
      });
    },
  };
}
