import { Pressable, StyleSheet, Text } from "react-native"

export const Button = ({ label, onClick }) => {
    return (
        <Pressable  onPress={onClick} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        nprderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        flex: 1,
    },
    label: {
        fontSize: 16,
    },
})