import { Action } from '@ngrx/store';

export const OPEN_SIDE_NAV = '[LAYOUT] OPEN';
export const CLOSE_SIDE_NAV = '[LAYOUT] CLOSE';

/**
 * 
 * 
 * @export
 * @class OpenSideNavAction
 * @implements {Action}
 */
export class OpenSideNavAction implements Action {
    readonly type = OPEN_SIDE_NAV;
}

/**
 * 
 * 
 * @export
 * @class CloseSideNavAction
 * @implements {Action}
 */
export class CloseSideNavAction implements Action {
    readonly type = CLOSE_SIDE_NAV;
}

export type Actions = OpenSideNavAction | CloseSideNavAction;
