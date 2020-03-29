import { createStore,applyMiddleware, compose } from "redux";
import thunk  from "redux-thunk";
import  rootReducer  from "./reducers/index";

const initialState ={};

//中间件解释
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    
    //Put all the midware here
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )
)
