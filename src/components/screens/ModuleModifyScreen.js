import React from 'react';
import { Text, StatusBar } from 'react-native';
import Screen from '../layout/Screen';

const ModuleModifyScreen = () => {
    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <Text>Modify</Text>
        </Screen>
    )
};

export default ModuleModifyScreen;