import { StyleSheet, ScrollView } from "react-native";
import ModuleItem from "./ModuleItem.js";


const ModuleList = ({modules, onSelect}) => {
    return (
        <ScrollView style={styles.container}>
            { modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect}/>
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
});

export default ModuleList;