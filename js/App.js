import React, { Component } from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import AppContainer from './containers/AppContainer';
import DispatchLogger from './middleware/DispatchLogger';

import reducers from './reducers';
import persistenceTransformer from './util/persistenceTransformer';

const { AsyncStorage } = React;

const store = compose(
    applyMiddleware(thunk, DispatchLogger)
)(createStore)(combineReducers(reducers));

persistStore(store, { storage: AsyncStorage, transforms: [ persistenceTransformer ] });

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                { () => <AppContainer /> }
            </Provider>
        );
    }

}
