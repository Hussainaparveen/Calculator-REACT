import { createStore } from "redux";
const initialState={
    result:'',
};

function Reducer(state=initialState,action){
    switch(action.type){
        case "UPDATE_RESULT":
            return{...state,result:action.value};
        default:
            return{...state};
    }
}
export const store=createStore(Reducer);