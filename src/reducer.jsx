import createStore from "redux";

const initialState = {
    value: 0,
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INC":
            return {...state, value:state.value + 1};
        case "DEC":
            return {...state, value:state.value - 1};
        default:
            return state;
    }
}

const store = createStore(counterReducer)