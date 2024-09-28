import React from "react";
import { StatusBar, LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

import { ButtonTray, Button  } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const ModuleListScreen = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])


    const navigation = useNavigation();
    const [modules, setModules] = React.useState(initialModules);

    // const handleSelect = (module) => { 
    //     navigation.navigate('ModuleViewScreen', { 
    //         module, 
    //         onRemove: handleDelete,
    //         onModify: handleModify 
    //     });
    // };
    
    const handleDelete = (module) => { 
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID)); 
    };

    const onDelete = (module) => {
        handleDelete(module);
        navigation.navigate('ModuleListScreen');
    };

    const handleAdd = (module) => {
        setModules([...modules, module]);
    };

    const handleModify = (updatedModule) => { 
        setModules(
            modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ?  updatedModule : module)
        );
    };

    

    const onAdd = (module) => {
        handleAdd(module);
        navigation.navigate('ModuleListScreen');
    };

    const onModify = (module) => {
        handleModify(module);
        navigation.navigate('ModuleListScreen');
    };

    const gotoViewScreen = (module) => {
        navigation.navigate('ModuleViewScreen', {
            module,
            onDelete: onDelete,
            onModify: onModify
        });
    };  

    const gotoAddScreen = () => {
        navigation.navigate('ModuleAddScreen', {
            onSave: onAdd,
        });
    };
    
    return ( 
        <Screen>
            <StatusBar barStyle="light-content" />
            <ButtonTray>
                <Button icon={<Icons.Add />} label="Add" onPress={gotoAddScreen} />
            </ButtonTray>
            <ModuleList modules={modules} onSelect={gotoViewScreen} onDelete={handleDelete} />
        </Screen>
    );
};  

export default ModuleListScreen; 