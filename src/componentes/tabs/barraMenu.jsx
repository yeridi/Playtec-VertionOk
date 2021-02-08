import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CodeIcon from '@material-ui/icons/Code';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import {
    AppBar, Tabs,
    Tab
} from "@material-ui/core"



function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

export default class ScrollableTabsButtonForce extends React.Component {
    constructor(){
        super();
        this.state = { 
            value : 0
        }
    }
    // const {changeCambioDeTab} = props
    handleChange = async (event, newValue) => {
        await this.setState({value:newValue});
        this.props.changeCambioDeTab(this.state.value)
    };
    EditorClick = (e)=>{
        this.props.clickEdito(e)
    }
    render(){
        return <AppBar position="static"  color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Editar" icon={<EditIcon />} {...a11yProps(0)} />
                        <Tab label="Codigo" onClick={this.EditorClick} icon={<CodeIcon />} {...a11yProps(1)} />
                        <Tab label="XML" icon={<ImportExportIcon />} {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
    };
}



