import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
    const navigation = useNavigation();
    let [modules, setModules] = React.useState(initialModules);
    const handleSelect = (module) => { navigation.navigate('ModuleViewScreen', { module }) };

    const handleDelete = (module) => { setModules(modules.filter((item) => item.ModuleID !== module.ModuleID)); console.log(`Module deleted: ${module.ModuleCode} - ${module.ModuleName}`); }; 

    return ( 
        <Screen>
            <StatusBar barStyle="dark-content" />
            <ModuleList modules={modules} onSelect={handleSelect} onRemove={handleDelete}/>
        </Screen>
    );
};  

export default ModuleListScreen; 