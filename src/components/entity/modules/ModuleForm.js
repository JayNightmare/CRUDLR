import React, { useState } from 'react';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null
}

const ModuleForm = ({ ogModule, onSubmit, onCancel }) => {
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = 'https://via.placeholder.com/150';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Third Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    const [module, setModule] = useState(ogModule || defaultModule);

    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => {
        if (typeof onSubmit === 'function') {
            onSubmit(module); // Make sure `onSubmit` is called here
        } else {
            console.error('onSubmit is not a function:', onSubmit);
        }
    };

    const submitLabel = ogModule ? 'Update Module' : 'Add Module';
    const submitIcon = ogModule ? <Icons.Edit size={15}/> : <Icons.Add size={15}/>;

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            {/* <Text style={styles.title}>Edit Module</Text> */}
            <Form.InputText label="Module Code" value={module.ModuleCode} onChange={(value) => handleChange('ModuleCode', value)} />
            <Form.InputText label="Module Name" value={module.ModuleName} onChange={(value) => handleChange('ModuleName', value)} />
            <Form.InputSelect label="Module Level" prompt="Select Module Level" options={levels} value={module.ModuleLevel} onChange={(value) => handleChange('ModuleLevel', value)} />
            <Form.InputText label="Module Leader Name" value={module.ModuleLeaderName} onChange={(value) => handleChange('ModuleLeaderName', value)} />
            <Form.InputText label="Module Image" value={module.ModuleImage} onChange={(value) => handleChange('ModuleImage', value)} />
        </Form>
    )
}

export default ModuleForm;