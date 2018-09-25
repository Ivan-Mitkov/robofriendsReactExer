import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    searchField:''
}

export const searchRobots = (state = initialState, action = {}) => {
    // console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
        //return new state wich will have everthing in the state {} plus it will update (state)
        //with new searchField:action.payload
            return Object.assign({}, state, { searchField: action.payload });
        //pure function always must return something    
        default:
        return state;
    }
}