import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";

const ModuleView = ({ module, placeHolderText, onModify, onRemove }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{module.ModuleCode}</Text>
            <Text style={styles.subtitle}> {module.ModuleName}</Text>
            <Image style={styles.image} source={{ uri: module.ModuleImage }} />
            <Text style={styles.detail}>Level: {module.ModuleLevel}</Text>
            <Text style={styles.detail}>Module Leader: {module.ModuleLeaderName}</Text>

            <ButtonTray>
                <Button onPress={() => onModify(module)} icon={<Icons.Edit />} label='Modify' />
                <Button onPress={() => onRemove(module)} icon={<Icons.Delete />} label='Delete' styleLabel={{ color: 'red' }} styleButton={{ borderColor: 'red' }} />
            </ButtonTray>

            <Text style={styles.descrip} >{placeHolderText}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
        color: 'black'
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    descrip: {
        borderTopWidth: 1,
        borderTopColor: 'gray',
        marginTop: 10,
        marginBottom: 20,
        lineHeight: 24,
        color: 'black'
    },
    pressableView: {
        marginVertical: 20
    },
    modifyButton: {
        backgroundColor: 'white', // White background
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'black', // Blue border
    },
    modifyButtonText: {
        color: 'black', // Blue text
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'white', // White background
        padding: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'red', // Red border
    },
    deleteButtonText: {
        color: 'red', // Red text
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default ModuleView;


// <View style={styles.pressableView}>
//     <Pressable onPress={() => onModify(module)} style={styles.modifyButton}>
//         <Text style={styles.modifyButtonText}>Edit Module</Text>
//     </Pressable>

//     {/* Delete Button */}
//     <Pressable onPress={() => onRemove(module)} style={styles.deleteButton}>
//         <Text style={styles.deleteButtonText}>Delete Module</Text>
//     </Pressable>
// </View>;
