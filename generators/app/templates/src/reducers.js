import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import foo from 'containers/Foo/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    foo,
    routing: routerReducer,
    ...asyncReducers,
  });
}

