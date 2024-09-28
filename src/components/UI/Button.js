import { Pressable, StyleSheet, Text, View } from "react-native"

export const ButtonTray = ({ children }) => {
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
}

export const Button = ({ icon, label, onPress, styleLabel, styleButton }) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, styleButton]}>
            { icon || null }
            <Text style={[styles.label, styleLabel]}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
        flexDirection: 'row',
        gap: 5,
    },
    label: {
        fontSize: 16,
    },
})

export default { Button, ButtonTray };
