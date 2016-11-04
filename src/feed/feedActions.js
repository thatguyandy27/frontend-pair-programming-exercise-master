
import {feedActions} from './feedConstants.js';

export function retrieveFeed(){
    return {
        type: feedActions.retrieveFeed
    };
}