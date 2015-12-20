import Immutable from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import NavigationActionTypes from '../constants/NavigationActionTypes';
import NavigatorKeys from '../constants/NavigatorKeys';

const initialState = Immutable.fromJS({
    navigators: {
        [NavigatorKeys.ROOT]: {
            key: NavigatorKeys.ROOT,
            initialRoute: {
                id: 0,
                componentKey: 'Todos',
                sceneConfig: 'FloatFromRight'
            },
            actions: []
        }
    }
});

let appendActionToNavigator = (state, action) => {
    return state.updateIn(['navigators', action.navigatorKey, 'actions'], actions => actions.push(Immutable.fromJS(action)));
};

export default function(state, action) {

    return initialState;

    switch (action.type) {

        case NavigationActionTypes.NAVIGATOR_JUMP_BACK:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_JUMP_FORWARD:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_JUMP_TO:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_PUSH:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_POP:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_REPLACE:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_REPLACE_AT_INDEX:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_REPLACE_PREVIOUS:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_IMMEDIATELY_RESET_ROUTE_STACK:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_POP_TO_ROUTE:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_POP_TO_TOP:
            return appendActionToNavigator(state, action);

        case NavigationActionTypes.NAVIGATOR_REMOVE_ACTION:
            return state.updateIn(
                        ['navigators', action.navigatorKey, 'actions'],
                        actions => actions.filterNot(a => a == action.action)
                    );

        case REHYDRATE:
            if (action.key !== 'navigation') {
                return state;
            }

            state = action.payload;

            return state;

        default:
            return state;

    }

}
