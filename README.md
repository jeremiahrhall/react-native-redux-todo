# react-native-boilerplate

A "boilerplate" React Native application with an example "Todo" implementation and with the following features:

- Full ES6 support
- `redux`
- `immutable` data persisted to `AsyncStorage` on state change and rehydrated on app load with `redux-persist`
- A custom `Navigator` component controlled via actions
- Logging with `minilog`
- ESLint

![App Screenshot](https://raw.githubusercontent.com/jeremiahrhall/react-native-redux-todo/master/RNTodoMVC.png)

## Currently iOS only!

## Structure

- **android**
    - React Native created Android project for the app
- **ios**
    - React Native created XCode project for the iOS app
- **js**
    - **actionCreators**
        - Functions used throughout the app to create and dispatch `redux` actions
    - **components**
        - Reusable React components
    - **constants**
        - The app's constants
    - **containers**
        - High level components that connect to the `redux` store and pass props down to components, these typically map to the "Screens" of an app like "Settings" or "Dashboard", and potentially sub-views that have their own complex component hierarchy
    - **middleware**
        - Middleware receive dispatched actions before reducers, can interrupt the flow or allow it to continue, and can have side effects like logging the action or even dispatching other actions
    - **reducers**
        - Functions that respond to dispatched actions and return a modified version of the state
    - **selectors**
        - Functions used by containers and components to request a particular piece of the state tree
    - **styles**
        - Styling helpers
    - **util**
        - **persistenceTransformer.js**
            - this utility handles transformation as the state tree is persisted and rehydrated from local storage using `redux-persist`
        - Otherwise, just common application utilities
    - **App.js**
        - Common `redux` app entry point and setup
        - Initializes `redux` store, middleware, reducers, and persistence
- **.babelrc**
    - the config for babel, enables ES6+ features
- **.eslintrc**
    - ESLint configuration
- **.flowconfig**
    - React Native default FlowType configuration, no flow type annotations are currently in use
- **.gitignore**
    - React Native default .gitignore
- **.tern-project**
    - Tern configuration for Atom autocomplete
- **.watchmanconfig**
    - React Native default .watchmanconfig
- **index.android.js**
    - Entry point for Android app (not currently supported)
- **index.ios.js**
    - Entry point for iOS app
- **package.json**
    - Project's NPM dependencies, configuration, and scripts
- **README.md**
    - This file
- **stateMock.js**
    - A mock of the `redux` app's state tree to assist in visualizing it as a whole
