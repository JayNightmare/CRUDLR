import { StyleSheet, ScrollView } from "react-native";
import ModuleItem from "./ModuleItem.js";


const ModuleList = ({modules, onSelect}) => {
    return (
        <ScrollView style={styles.container}>
            {modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect(module)}/>
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
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

export default ModuleList;
