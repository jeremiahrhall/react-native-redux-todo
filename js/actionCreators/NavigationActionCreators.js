
import NavigationActionTypes from '../constants/NavigationActionTypes';

let dispatchRouteAction = (actionType, navigatorKey, componentKey, sceneConfig) => {
    return (dispatch) => {
        return dispatch({
            type: actionType,
            navigatorKey: navigatorKey,
            componentKey: componentKey,
            sceneConfig: sceneConfig
        });
    };
};

export function jumpBack(navigatorKey) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_JUMP_BACK,
            navigatorKey: navigatorKey
        });
    };
}

export function jumpForward(navigatorKey, componentKey) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_JUMP_FORWARD,
            navigatorKey: navigatorKey
        });
    };
}

export function jumpTo(navigatorKey, componentKey, sceneConfig) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_JUMP_TO,
        navigatorKey,
        componentKey,
        sceneConfig
    );
}

export function push(navigatorKey, componentKey, sceneConfig) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_PUSH,
        navigatorKey,
        componentKey,
        sceneConfig
    );
}

export function pop(navigatorKey) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_POP,
            navigatorKey: navigatorKey
        });
    };
}

export function replace(navigatorKey, componentKey, sceneConfig) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_REPLACE,
        navigatorKey,
        componentKey,
        sceneConfig
    );
}

export function replaceAtIndex(navigatorKey, componentKey, sceneConfig, index) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_REPLACE_AT_INDEX,
            navigatorKey: navigatorKey,
            navigateTo: componentKey,
            sceneConfig: sceneConfig,
            index: index
        });
    };
}

export function replacePrevious(navigatorKey, componentKey, sceneConfig) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_REPLACE_PREVIOUS,
        navigatorKey,
        componentKey,
        sceneConfig
    );
}

export function immediatelyResetRouteStack(navigatorKey, stack) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_IMMEDIATELY_RESET_ROUTE_STACK,
            stack: stack
        });
    };
}

export function popToRoute(navigatorKey, componentKey, sceneConfig) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_POP_TO_ROUTE,
        navigatorKey,
        componentKey,
        sceneConfig
    );
}

export function popToTop(navigatorKey) {
    return dispatchRouteAction(
        NavigationActionTypes.NAVIGATOR_POP_TO_TOP,
        navigatorKey
    );
}

export function removeAction(navigatorKey, action) {
    return (dispatch) => {
        return dispatch({
            type: NavigationActionTypes.NAVIGATOR_REMOVE_ACTION,
            navigatorKey: navigatorKey,
            action: action
        });
    };
}
