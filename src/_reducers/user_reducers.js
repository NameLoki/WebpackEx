import { LOGIN_USER, SING_UP } from '../_actions/types';

export default function(state = {}, action) {

    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginSuccess: action.payload
            }
        case SING_UP:
            return {
                ...state,
                data: action.data    
        }
        default:
            return state;
    }
}