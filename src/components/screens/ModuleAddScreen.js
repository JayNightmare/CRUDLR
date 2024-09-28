import React from 'react';
import { StatusBar } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';

const ModuleAddScreen = ({ navigation, route }) => {
    const { onAdd } = route.params;

    const handleCancel =  navigation.goBack;

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
        </Screen>
    )
};

export default ModuleAddScreen;