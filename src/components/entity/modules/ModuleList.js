import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import ModuleItem from "./ModuleItem.js";


const ModuleList = ({ modules, onSelect, isLoading }) => {
    return (
        <ScrollView style={styles.container}>
            {
                isLoading ? <ActivityIndicator size="large" color="#000" /> : null
            }
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
        borderBottomRightRadius: 5,
    }
});

export default ModuleList;