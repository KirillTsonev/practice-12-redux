import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer"
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

const store = createStore(rootReducer, middlewareEnhancer)
//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store