import React from 'react';
import { Text, StatusBar, View, StyleSheet, Pressable } from 'react-native';
import Screen from '../layout/Screen';

import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
    const modules = initialModules;

    return (
        <Screen>
            <StatusBar barStyle="dark-content" />
            <Pressable style={styles.container}>            
                { modules.map((module) => {
                return (
                    <View key={module.ModuleCode} style={styles.item}> 
                        <Text>{module.ModuleCode} | {module.ModuleName}</Text>
                    </View>
                )
                })}
            </Pressable>
 
        </Screen>

    )
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    }
});

export default ModuleListScreen;