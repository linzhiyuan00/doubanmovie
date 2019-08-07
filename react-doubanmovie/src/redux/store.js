import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer);
// store.getState()

export default store;