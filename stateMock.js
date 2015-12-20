export default {
    navigation: {
        navigators: {
            navigatorKey1: {
                key: 'navigatorKey1',
                stack: [
                    {
                        componentKey: 'SettingsScreen',
                        forwardSceneConfig: 'FloatFromLeft',
                        backSceneConfig: 'FloatFromRight'
                    },
                    {
                        componentKey: 'ListScreen',
                        forwardSceneConfig: 'FloatFromLeft',
                        backSceneConfig: 'FloatFromRight'
                    }
                ]
            },
            navigatorKey2: {
                key: 'navigatorKey2',
                stack: [
                    {
                        componentKey: 'SettingsUserProfile',
                        forwardSceneConfig: 'FloatFromLeft',
                        backSceneConfig: 'FloatFromRight'
                    },
                    {
                        componentKey: 'SettingsHome',
                        forwardSceneConfig: 'FloatFromLeft',
                        backSceneConfig: 'FloatFromRight'
                    }
                ]
            }
        }
    },
    settings: {
        settingKey1: 'settingValue1',
        settingKey2: true,
        settingKey3: [1, 2, 3]
    },
    apiClients: {
        apiKey1: {
            key: 'apiKey1',
            authorizationHeader: 'Token asdasdasdasd'
        }
    }
};
