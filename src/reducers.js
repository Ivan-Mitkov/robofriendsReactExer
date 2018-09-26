import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
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

const initialStateRobots={
    isPending:false,
    robots:[],
    error:''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, { error: action.payload, isPending: false })
        default:
            return state;
    }
}

