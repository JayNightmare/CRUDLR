import React from "react";
import { StatusBar } from "react-native";

import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
    const modules = initialModules;
    const handleSelect = (module) => () => alert(`${module.ModuleCode}:  ${module.ModuleName}`);

    return ( 
        <Screen>
            <StatusBar barStyle="dark-content" />
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

export default ModuleListScreen;