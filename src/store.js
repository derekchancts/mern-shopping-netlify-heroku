import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];


// const store = createStore(rootReducer,initialState, compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// ));

// export default store;


const store = createStore(rootReducer,initialState, compose(
  applyMiddleware(...middleware)
));

export default store


// const devTools =
//   process.env.NODE_ENV === "production"
//     ? applyMiddleware(...middlewares)
//     : compose (applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


// export default store = createStore(rootReducer,initialState, devTools);



