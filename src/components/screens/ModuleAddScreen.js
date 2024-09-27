import React from 'react';
import { Text, StatusBar } from 'react-native';
import Screen from '../layout/Screen';

const ModuleAddScreen = () => {
    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <Text>Add</Text>
        </Screen>
    )
};

export default ModuleAddScreen;