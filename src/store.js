import { createStore,applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import  rootReducer  from "./reducers/index";

const initialState ={};

//中间件解释
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
const middleware = [thunk];

export const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));
