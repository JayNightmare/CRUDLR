import { Pressable, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ModuleItem = ({ module, onSelect, onRemove }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Main row container */}
            <View style={styles.row}>
                {/* Pressable for selecting the module */}
                <Pressable onPress={() => onSelect(module)} style={styles.textContainer}>
                    <Text style={styles.moduleNameText}>
                        <Text style={{ fontWeight: "bold" }}>{module.ModuleCode}</Text> | {module.ModuleName}
                    </Text>
                </Pressable>

                {/* Pressable for the remove button */}
                <TouchableOpacity onPress={() => onRemove(module)} style={styles.removeButton}>
                    <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: "#e8e8e8", 
        borderRadius: 8,
        elevation: 2, 
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },

    row: {
        flexDirection: "row", // Align items horizontally
        justifyContent: "space-between", // Space between the text and delete button
        alignItems: "center", // Center items vertically
    },

    overView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10, 
    },

    textContainer: {
        flex: 1, 
    },

    moduleNameText: {
        fontSize: 18,
        color: "#333", 
    },

    removeButton: {
        padding: 5, 
    },
});

export default ModuleItem;
