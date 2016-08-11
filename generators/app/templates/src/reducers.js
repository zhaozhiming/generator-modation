import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import main from 'containers/Main/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    main,
    routing: routerReducer,
    ...asyncReducers,
  });
}

