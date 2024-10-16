import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

const Screen = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7c8f3',
        padding: 16,
    },
});

export default Screen; 
