import { LOGIN_USER, SING_UP } from '../_actions/types';

export default function(state = {}, action) {

    switch(action.type) {
        case LOGIN_USER:
            console.log(action);
            return {
                ...state,
                payload: action.payload
            }
        case SING_UP:
            console.log(action);
            return {
                ...state,
                payload: action.data    
        }
        default:
            return state;
    }
}