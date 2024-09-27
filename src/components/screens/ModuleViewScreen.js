import React from 'react';
import { Text, StatusBar } from 'react-native';
import Screen from '../layout/Screen';

const ModuleViewScreen = () => {
    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <Text>View</Text>
        </Screen>
    )
};

export default ModuleViewScreen;