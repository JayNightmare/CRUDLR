import { StyleSheet, ScrollView } from "react-native";
import ModuleItem from "./ModuleItem.js";


const ModuleList = ({modules, onSelect, onRemove}) => {
    return (
        <ScrollView style={styles.container}>
            { modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect} onRemove={onRemove}/>
            }) }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 5,
    }
});

export default ModuleList;
