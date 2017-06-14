import * as layout from './../actions/layout';

/**
 * Abstraction for State.
 * 
 * @export
 * @interface State
 */
export interface State {
    ShowSideNav: boolean;
}

/**
 * Initial State
 */
const initialState: State = {
    ShowSideNav: false
};

export function reducer(state = initialState, action: layout.Actions) {
    switch(action.type){
        case layout.CLOSE_SIDE_NAV: return {
            ShowSideNav: false
        };

        case layout.OPEN_SIDE_NAV: return {
            ShowSideNav: true
        };
        default: return state;
    }
}

export const getShowSideNav = (state: State)=> {
    return state.ShowSideNav;
}