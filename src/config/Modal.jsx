import React, {Suspense} from 'react';
import Blockly from "../blockly copy/core";

import IMG from '../example.PNG'

//Models//

import Model from '../componentes/three/Playtec-Robot'

//three
import { Canvas, useThree } from 'react-three-fiber'
import Lights from '../componentes/three/ligths'
import Floor from '../componentes/three/floor'
import {softShadows, Loader, OrbitControls} from '@react-three/drei'


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import en from "../blockly copy/msg/en";
import es from "../blockly copy/msg/es";
import fr from "../blockly copy/msg/fr";
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Delete from '@material-ui/icons/Delete';
import Copy from '@material-ui/icons/FileCopy';
import { saveAs } from 'file-saver'
import { PlayCircleFilled, PlayForWork, PlayForWorkRounded, PlaylistAdd } from '@material-ui/icons';
//three
softShadows();


function load(event) {
    var files = event.target.files;
    // Only allow uploading one file.
    if (files.length !== 1) {
      return;
    }
  
    // FileReader
    var reader = new FileReader();
    reader.onloadend = function (event) {
      var target = event.target;
      // 2 == FileReader.DONE
      if (target.readyState === 2) {
        try {
          var xml = Blockly.Xml.textToDom(target.result);
        } catch (e) {
          alert('Error parsing XML:\n' + e);
          return;
        }
        var count = Blockly.mainWorkspace.getAllBlocks().length;
        if (count) {
          Blockly.mainWorkspace.clear();
        }
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
      }
      // Reset value of input after loading because Chrome will not fire
      // a 'change' event if the same file is loaded again.
      document.getElementById('load').value = '';
    };
    reader.readAsText(files[0]);
  }



class Menu extends React.Component {
    
    constructor() {
        super();

        this.state = {
            modalIsOpenNew:false,
            modalIsOpen: false,
            "PlayBot": false,
            "lcd": false,
            "ultrasonic": false,
            "Bluetooth": false,
            "RFID": false,
            "Sensores": false

        };
        this.openModalNew = this.openModalNew.bind(this);
        this.closeModalNew = this.closeModalNew.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.classes = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
            paper: {
                width: '80%',
                maxHeight: 435,
            },
            pink: {
                color: theme.palette.getContrastText(pink[500]),
                backgroundColor: pink[500],
            },
            green: {
                color: '#fff',
                backgroundColor: green[500],
            },
/*             image:{
                width:'20%',
                background:'red',
            } */
            logo: {
                width: '70%',
                margin: 'auto',
                background: 'red',
            },
        }));
        this.arregloBloques = [
            "PlayBot",
            "lcd",
            "ultrasonic",
            "Bluetooth",
            "RFID",
            "Sensores"
        ]

    }
    componentDidMount = async () => {
        try {
            const localState = JSON.parse(localStorage.getItem('stateLocalBloques'))
            
            const categoria = localState.categoriasModal 

            console.log(categoria)
            
            this.setState({
                "PlayBot": categoria[0],
                "lcd": categoria[1],
                "ultrasonic": categoria[2],
                "Bluetooth": categoria[3],
                "RFID": categoria[4],
                "Sensores": categoria[5]
            })
        } catch (error) {

        }

    }

    openModalNew(){
        this.setState({ modalIsOpenNew: true });
    }

    closeModalNew(){
        this.setState({ modalIsOpenNew: false });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }
    handleFormSubmit = () => {

        if (this.state.selectedOption === 'Es') {
            Blockly.setLocale(es);
        } else if (this.state.selectedOption === 'En') {
            Blockly.setLocale(en);
        } else if (this.state.selectedOption === 'Fr') {
            Blockly.setLocale(fr);

        }
        let positivos = []
        for (const key in this.arregloBloques) {
            let element = this.arregloBloques[key]
            let p = (this.state[element] !== undefined || null) ? this.state[element] : 0;
            positivos.push({ [element]: p })

        }
        this.props.cambioCategorias(positivos)
        this.setState({ modalIsOpen: false });

    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    changeBlock = (elem) => {
        let variableBlock = elem.target.value
        let StateBlock = elem.target.checked
        if (StateBlock === true) {
            this.setState({ [variableBlock]: true })
        } else {
            this.setState({ [variableBlock]: false })
        }
    }
    ExportarXML = () => {
        const newXml = Blockly.Xml.domToText(
          Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
        );
        let blob = new Blob([newXml], { type: "text/xml;charset=utf-8" });
        saveAs(blob, "generar.xml");
      }
      ImportarXML = () => {
        let file = document.querySelector('#load')
        file.addEventListener('change', load, false);
        file.click()
      }

      DeleteBlockly =()=>{
        Blockly.mainWorkspace.clear();
   
       }
       copycode=()=>{
           var lol = document.getElementById('content_arduino');
           lol.select();
           document.execCommand("copy");
         
         }
       render() {
           return ( 
            <div id="BotonesAccionContainer"
            >
                <Avatar id="btn_run" onClick={this.openModalNew} className={this.classes.pink + " btn-opciones"}>
                    <PlayCircleFilled />
                </Avatar>

                <Avatar id="btn_copy" onClick={this.copycode} className={this.classes.pink + " btn-opciones"}>
                     <Copy />
                </Avatar>    
                <Avatar id="btn_export" onClick={this.ExportarXML} className={this.classes.pink + " btn-opciones"} >
                    <CloudDownloadIcon />
                </Avatar>
                <Avatar id="btn_import"onClick={this.ImportarXML} className={this.classes.pink + " btn-opciones"} >
                    <CloudUploadIcon />
                </Avatar>
                <Avatar id="btn_delete"onClick={this.DeleteBlockly} className={this.classes.pink + " btn-opciones"}>
                    <Delete />
                </Avatar>
                <Avatar id="btn_config" onClick={this.openModal} className={this.classes.pink + " btn-opciones"}>
                    <SettingsIcon />
                </Avatar>

              
                <input type="file" id="load" style={{ "display": "none" }} />

             <Dialog
                 disableBackdropClick
                 disableEscapeKeyDown
                 maxWidth="sm"
                 aria-labelledby="confirmation-dialog-title"
                 open={this.state.modalIsOpen}
             >

                 <form onSubmit={this.handleFormSubmit}>
                     <DialogTitle id="confirmation-dialog-title">Configuraciones</DialogTitle>
                     <DialogContent dividers>
                         <div className={"container"}>
                             <p>idiomas</p>
                             <RadioGroup
                                 aria-label="ringtone"
                                 name="ringtone"
                                 row
                             >
                                 <FormControlLabel value={"español"} key={"español"} control={
                                     <Radio id={'radio_español'}

                                         checked={this.state.selectedOption === 'Es'}
                                         onChange={this.handleOptionChange}
                                         value={'Es'}
                                     />
                                 } label={"español"} />

                                 <FormControlLabel value={"ingles"} key={"ingles"} control={
                                     <Radio id={'radio_ingles'}

                                         checked={this.state.selectedOption === 'En'}
                                         onChange={this.handleOptionChange}
                                         value={'En'}
                                     />
                                 } label={"ingles"} />

                                 {/* <FormControlLabel value={"frances"} key={"frances"} control={
                                     <Radio id={'radio_frances'}

                                         checked={this.state.selectedOption === 'Fr'}
                                         onChange={this.handleOptionChange}
                                         value={'Fr'}
                                     />
                                 } label={"frances"} /> */}

                             </RadioGroup>
                             <p>otros Componetes</p> 
                             <FormGroup row id="contenedor_radio">
                                 {
                                     this.arregloBloques.map(element => {
                                         return <FormControlLabel
                                             control={
                                                 <Checkbox
                                                     checked={this.state[element]}
                                                     onChange={this.changeBlock}
                                                     value={element} />
                                             }
                                             label={element}
                                         />
                                     })
                                 }
                             </FormGroup>

                         </div>
                     </DialogContent>

                     <DialogActions>
                         <Button onClick={this.closeModal} color="primary">
                             Cancel
                        </Button>
                         <Button onClick={this.handleFormSubmit} color="primary">
                             Ok
                        </Button>
                     </DialogActions>
                 </form>
             </Dialog>
             <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xl"
                aria-labelledby="new-title"
                open={this.state.modalIsOpenNew}
             >
                 <DialogTitle id="new-title">
                    <a href="http://playtecedu.com/herramientas">
                        <img src={"http://playtecedu.com/plugins/blocklyduino/media/playtecrobot.gif"}
                            style={{ height: "60px", "margin-right": "0px", 'vertical-align': "middle" }} title="Click if you want to learn more" />
                    </a>
                    <a href="http://playtecedu.com/herramientas" class="imagenes">
                        <img src={"http://playtecedu.com/plugins/blocklyduino/logo.png"}
                            style={{ height: "50px", "margin-right": "0px", "vertical-align": "middle" }} title="Click if you want to learn more" />
                    </a>
                 </DialogTitle>
                 <DialogContent dividers>
                     <div className='container' style={{width:'1000px', height:'500px'}}>
                        <Canvas
                            colorManagement
                            shadowMap
                            camera={{position:[-5,4,4], fov:50}}
                        >
                            <Suspense fallback={null}>
                                <Model></Model>
                                <Lights/>
                                <Floor></Floor>
                                <OrbitControls/>
                                <Loader/>
                            </Suspense>
                        </Canvas>
                      </div>
                 </DialogContent>
                 <DialogActions>
                         <Button onClick={this.closeModalNew} color="primary">
                             Cancel
                        </Button>
                         <Button onClick={this.closeModalNew} color="primary">
                             Close
                        </Button>
                </DialogActions>
             </Dialog>
             
         </div>

        );
    }
}

export default Menu;








