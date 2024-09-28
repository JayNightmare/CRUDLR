import React, { useState } from 'react';
import { Text, StatusBar, View, TextInput, StyleSheet, Button } from 'react-native';
import Screen from '../layout/Screen';

const ModuleModifyScreen = ({ route,  navigation }) => {
    const { module } = route.params;

    const [moduleName, setModuleName] = useState(module.ModuleName);
    const [moduleCode, setModuleCode] = useState(module.ModuleCode);
    const [moduleLevel, setModuleLevel] = useState(module.ModuleLevel);

    const handleSave = () => navigation.goBack();
    const handleCancel = () => navigation.goBack();

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <Text style={styles.title}>Edit Module</Text>
                
                {/* Form Input for Module Code */}
                <Text style={styles.label}>Module Code:</Text>
                <TextInput
                    style={styles.input}
                    value={moduleCode}
                    onChangeText={setModuleCode}
                />
                
                {/* Form Input for Module Name */}
                <Text style={styles.label}>Module Name:</Text>
                <TextInput
                    style={styles.input}
                    value={moduleName}
                    onChangeText={setModuleName}
                />
                
                {/* Form Input for Module Level */}
                <Text style={styles.label}>Module Level:</Text>
                <TextInput
                    style={styles.input}
                    value={moduleLevel}
                    onChangeText={setModuleLevel}
                    keyboardType="numeric"
                />

                {/* Buttons for Saving and Canceling */}
                <View style={styles.buttonContainer}>
                    <Button title="Save Changes" onPress={handleSave} color="blue" />
                    <Button title="Cancel" onPress={handleCancel} color="gray" />
                </View>
            </View>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});


export default ModuleModifyScreen;