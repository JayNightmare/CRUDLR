import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icons from '../../UI/Icons';
import { Button, ButtonTray } from '../../UI/Button';

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null
}

const ModuleForm = ({ handleCancel, navigation, onModify, onSubmit, onCancel }) => {
    const [module, setModule] = useState(defaultModule);

    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = 'https://via.placeholder.com/150';

    const handleChange = (field, value) => { 
        setModule({ ...module, [field]: value });
    }

    const handleSubmit = () => {
        onSubmit(module);
    }

    const submitLabel = module.ModuleID? 'Update Module' : 'Add Module';
    const submitIcon = module.ModuleID? Icons.Save : Icons.Add;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Module</Text>
            
            {/* Form Input for Module Code */}
            <Text style={styles.label}>Module Code:</Text>
            <TextInput
                style={styles.input}
                value={module.ModuleCode}
                onChangeText={(value) => handleChange('ModuleCode', value)}
            />
            
            {/* Form Input for Module Name */}
            <Text style={styles.label}>Module Name:</Text>
            <TextInput
                style={styles.input}
                value={module.ModuleName}
                onChangeText={(value) => handleChange('ModuleName', value)}
            />
            
            {/* Form Input for Module Level */}
            <Text style={styles.label}>Module Level:</Text>
            <TextInput
                style={styles.input}
                value={module.ModuleLevel}
                onChangeText={(value) => handleChange('ModuleLevel', value)}
                keyboardType="numeric"
            />

            {/* Buttons for Saving and Canceling */}
            <ButtonTray style={styles.buttonContainer}>
                <Button label={submitLabel} icon={submitIcon} title="Save Changes" onPress={handleSubmit} color="black" />
                <Button label="Cancel" title="Cancel" onPress={onCancel} color="gray" />
            </ButtonTray>
        </View>
    )
}


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

export default ModuleForm;