import { Pressable, StyleSheet, View, Text } from "react-native";


const ModuleItem = ({ module, onSelect }) => {
    return (
        <Pressable key={module.ModuleCode} onPress={() => onSelect(module)}>
            <View style={styles.item}>
                <Text style={styles.moduleNameText}>
                    <Text style={{ fontWeight: "bold" }}>
                        {module.ModuleCode}
                    </Text>{" "}
                    | {module.ModuleName}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    moduleNameText: {   
        fontSize: 22, // adjust the font size here
    },
});

export default ModuleItem;
