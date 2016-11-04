import {feedActions} from './feedConstants.js';
import { loop, Effects } from 'redux-loop';
import {retrieveFeed} from './feedApi.js';

const initState = {};

export default function(state = initState, action){

    switch(action.type){
        case feedActions.retrieveFeed:
            return loop(
                state,
                Effects.promise(retrieveFeed)
            );
        default:
            return state;
    }
}
