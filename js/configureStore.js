
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';


const enhancer = compose(
  applyMiddleware(thunk, promise),
  devTools({
    name: 'nativestarterkit', realtime: true,
  }),
);

export default (onCompletion:()=> void, initialState) => {
  const store = createStore(reducer, initialState, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);
  return store;
}
