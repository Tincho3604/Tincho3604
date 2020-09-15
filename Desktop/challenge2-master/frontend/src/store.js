import { createStore, combineReducers } from 'redux'; //const initialState = [];
import reducers from './components/redux/reducers';

const reducer = combineReducers({
    global: reducers
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


