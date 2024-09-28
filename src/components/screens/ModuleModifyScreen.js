import { StatusBar } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';


const ModuleModifyScreen = ({ route,  navigation }) => {
    const { module, onModify } = route.params;

    const handleCancel =  navigation.goBack;
    
    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <ModuleForm onSubmit={onModify} onCancel={handleCancel} module={module}></ModuleForm>
        </Screen>
    )
};

export default ModuleModifyScreen;