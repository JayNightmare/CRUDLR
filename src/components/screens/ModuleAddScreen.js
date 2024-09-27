import React from 'react';
import { Text, StatusBar } from 'react-native';
import Screen from '../layout/Screen';

const ModuleAddScreen = () => {
    return (
        <Screen>
            <StatusBar barStyle="dark-content" />
            <Text>Add</Text>
        </Screen>
    )
};

export default ModuleAddScreen;