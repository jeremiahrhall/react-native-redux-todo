const NavigationSelectors = {

    getNavigatorForKey(key) {
        return (state) => {
            return state.navigation.getIn(['navigators', key]);
        };
    },

    getActionsForNavigatorKey(key) {
        return (state) => {
            return state.navigation.getIn(['navigators', key, 'actions']);
        }
    },

    getInitialRouteFor(key) {
        return (state) => {
            return state.navigation.getIn(['navigators', key, 'initialRoute']);
        };
    },

    getSceneConfigFrom(action) {
        return action.get('sceneConfig');
    },

    getTypeFrom(action) {
        return action.get('type');
    },

    getComponentKeyFrom(action) {
        return action.get('componentKey');
    },

};

export default NavigationSelectors;
