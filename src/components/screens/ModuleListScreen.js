import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
    const navigation = useNavigation();
    let [modules, setModules] = React.useState(initialModules);

    const handleSelect = (module) => { 
        navigation.navigate('ModuleViewScreen', { 
            module, 
            onRemove: handleDelete, // Ensure `handleDelete` is correctly defined
        });
    };
    
    const handleDelete = (module) => { 
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID)); 
        navigation.navigate('ModuleListScreen');
    };
    
    return ( 
        <Screen>
            <StatusBar barStyle="light-content" />
            <ModuleList modules={modules} onSelect={handleSelect} onRemove={handleDelete} />
        </Screen>
    );
};  

export default ModuleListScreen; 