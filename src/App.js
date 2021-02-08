
import "./Styles/App.css";
import React from "react";

//Code//
import Generar from "./Code/generar";
import Blockly from "./blockly copy/blockly";
import BlocklyJSA from "./Code/Arduino";
import BlocklyComponent from "./Blockly";
import AlertDialog from "./config/Modal"
import { Button, ButtonGroup } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import ExtensionIcon from '@material-ui/icons/Extension';
import CodeIcon from '@material-ui/icons/Code';

import lightBlue from '@material-ui/core/colors/lightBlue'


//Categorias//
import CategoryBucles from "./blocks/Category_Bucles/categ_bucle.jsx";
import CategoryLogica from "./blocks/Category_Logic/cate_logic.jsx";
import CategoryMath from "./blocks/Category_Math/cate_math.jsx";
import CategoryInicial from "./blocks/Category_Inicializar/cate_inicializar"
import CategoryText from "./blocks/Category_Text/cate_text.jsx";
import CategoryVariable from "./blocks/Category_Variables/categ_variable"
import CategoryDigital from "./blocks/Category_Digital/categ_digital"
import CategoryFuncion from "./blocks/Category_Function/categ_funcion";
import CategoryAnalog from "./blocks/Category_Analog/categ_analog.jsx";
import CategorySerial from "./blocks/Category_Serial/cate_serial";
import CategoryTone from "./blocks/Category_Tone/categ_tone"
import CategoryTime from "./blocks/Category_Timer/categ_timer";
import CategoryServo from "./blocks/Category_Servo/categ_Servo"

import CategoryRobot from "./blocks/Category_Robot/Category_Engines/categ_engines";
import CategoryBluetooth from "./blocks/Category_Bluetooth/categ_bluetooth";
import CategoryLcd from "./blocks/Category_Lcd/categ_lcd";
import CategoryUltraSonic from "./blocks/Category_Ultra/categ_ultra"
import CategoryRFID from "./blocks/Category_RFID/categ_rfid"
import CategorySensores from "./blocks/Category_Sensors/categ_sensors"

function load(event) {
  var files = event.target.files;
  // Only allow uploading one file.
  //cambio
  if (files.length !== 1) {
    return;

  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function (event) {
    var target = event.target;
    // 2 == FileReader.DONE
    //cambio
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

function fun_name(estados)
{
  let padres = document.querySelectorAll('.blocklyTreeRow')
  let contador = 0
  for(const padre of padres){
    let valor =  padre.parentNode.getAttribute("aria-posinset");
    if(valor >= 14){
      if(estados[contador]){
         padre.style.display = "block"
      }else{
         padre.style.display = "none"
      }
       contador++
    }
  }
}

const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(5),
    backgroundColor: 'red',
  }
}));
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriasModal: [
        false,false,false,
        false,false,false,
      ]
    }
    this.handleChangeOtrosComponent = this.handleChangeOtrosComponent.bind(this)
    this.azul = lightBlue[700]

  }
  componentDidMount = async () => {
    //categorias
    fun_name(this.state.categoriasModal)
    //localstore
    try {
      let local = localStorage.getItem('datos') // xml bloques
      let localbloquesState = localStorage.getItem('stateLocalBloques') // categorias selecionadas

      let xmlDoc = Blockly.Xml.textToDom(local);
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDoc);

      let stelocal = JSON.parse(localbloquesState)
     
      await this.setState(stelocal) 
     
      fun_name(this.state.categoriasModal)

    } catch (error) {

      console.log('es vacio ',error);

    }
    // cuardar local store
    window.addEventListener('unload', () => {
      //guardar bloques
      const newXml = Blockly.Xml.domToText(
        Blockly.Xml.workspaceToDom(this.simpleWorkspace.workspace)
      );
      localStorage.setItem('datos', String(newXml));
      //guardar categorias 
      const localState = this.state;
      localStorage.setItem('stateLocalBloques', JSON.stringify(localState))
    })

  }
  generateXml = () => {

    const newXml = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.simpleWorkspace.workspace)
    );
    console.log(newXml)
  };
  generateCode = (e) => {
    var code = BlocklyJSA.workspaceToCode(this.simpleWorkspace.workspace);
    document.getElementById('content_arduino').value = code;
  
    var btn_export =document.getElementById('btn_export');
    var btn_import =document.getElementById('btn_import');
    var btn_delete =document.getElementById('btn_delete');
    var btn_config =document.getElementById('btn_config');
    var btn_run = document.getElementById('btn_run');

    var arduino = document.getElementById('content_arduino');
    var bloques = document.getElementById('bloques');
    var btn_copy = document.getElementById('btn_copy');
    arduino.style.visibility = "visible"
    bloques.style.visibility = "hidden"
    btn_export.style.visibility = "hidden"
    btn_import.style.visibility = "hidden"
    btn_delete.style.visibility = "hidden"
    btn_config.style.visibility = "hidden"
    btn_run.style.visibility = "hidden"

    btn_copy.style.visibility = "visible"

  };

/*   Alert=()=>{
    alert('hola');
  }
 */
  Bloques = () => {
    var bloques = document.getElementById("bloques");
    var arduino = document.getElementById("content_arduino");

    var btn_export =document.getElementById('btn_export');
    var btn_import =document.getElementById('btn_import');
    var btn_delete =document.getElementById('btn_delete');
    var btn_config =document.getElementById('btn_config');
    var btn_copy = document.getElementById("btn_copy");
    var btn_run = document.getElementById('btn_run');

    arduino.style.visibility = "visible"
    bloques.style.visibility = "hidden"
    btn_export.style.visibility = "visible"
    btn_import.style.visibility = "visible"
    btn_delete.style.visibility = "visible"
    btn_config.style.visibility = "visible"
    btn_run.style.visibility = "visible"

    btn_copy.style.visibility = "hidden"


    if (bloques.style.visibility === "hidden") {
      bloques.style.visibility = "visible";
      arduino.style.visibility = "hidden";
    } else {
      arduino.style.visibility = "hidden";
    }
  };
  handleChangeOtrosComponent = async (obj) => {
    await this.setState(
      {
        categoriasModal:[
          obj[0].PlayBot,obj[1].lcd,obj[2].ultrasonic,
          obj[3].Bluetooth,obj[4].RFID,obj[5].Sensores
        ]
      }
    )
    fun_name(this.state.categoriasModal)


  }


  handleChangeOtrosComponent = async (obj) => {
    await this.setState(
      {
        categoriasModal:[
          obj[0].PlayBot,obj[1].lcd,obj[2].ultrasonic,
          obj[3].Bluetooth,obj[4].RFID,obj[5].Sensores
        ]
      }
    )
    fun_name(this.state.categoriasModal)

  }

  render() {
    return (

      <div name="app">
        <div class="nav-wrapper-bloques">

          <a href="http://playtecedu.com/herramientas">
            <img src={"http://playtecedu.com/plugins/blocklyduino/media/playtecrobot.gif"}
              style={{ height: "60px", "margin-right": "0px", 'vertical-align': "middle" }} title="Hi!" />
          </a>
          <a href="http://playtecedu.com/herramientas" class="imagenes">
            <img src={"http://playtecedu.com/plugins/blocklyduino/logo.png"}
              style={{ height: "50px", "margin-right": "0px", "vertical-align": "middle" }} title="Hi!" />
          </a>
        </div>

        <div className={`contenedor-head-bloques`}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={this.Bloques}
              startIcon={<ExtensionIcon />}
              className={classes.button}
            >
              Bloques
          </Button>
            <Button onClick={this.generateCode}
              startIcon={<CodeIcon />}
              className={classes.button}
            >
              Arduino
          </Button>

          {/* <Button
              startIcon={<CodeIcon />}
              className={classes.button}
              onClick={this.generateCode}
            >
            Run

          </Button> */}
         

          </ButtonGroup>
          <AlertDialog
            cambioCategorias={this.handleChangeOtrosComponent}
          />
        </div>

        <Generar />


        <div id="bloques" className="blockly">
          <header className="App-header">
            <BlocklyComponent
              ref={e => (this.simpleWorkspace = e)}
              readOnly={false}
              id="BlComponent"
              move={{
                scrollbars: true,
                drag: true,
                wheel: true
              }}
            
            >
               <CategoryLogica />
              <CategoryBucles />
              <CategoryMath />
              <CategoryText />
               <CategoryVariable /> 
              <CategoryFuncion />
              <CategoryInicial />
              <CategoryDigital /> 
              <CategoryAnalog />
              <CategorySerial />
              <CategoryTone />
              <CategoryTime />
               <CategoryServo /> 
              <CategoryRobot />
              <CategoryLcd />
              <CategoryUltraSonic />
              <CategoryBluetooth />
              <CategoryRFID />
              <CategorySensores />


            </BlocklyComponent>
          </header>
        </div>
      </div>

    );
  }
}

