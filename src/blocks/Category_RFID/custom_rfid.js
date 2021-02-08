
import * as Blockly from '../../blockly copy/blockly';
import '../../fields/BlocklyReactField';
import '../../fields/DateField';
import { ReactRFIDImg } from '../Category_RFID/Modulo_ImgRFID';


/* 1er Bloque */
var colorBluetooth = Blockly.Arduino.colores.cate_bucles
var ReactRfidInit = {
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    type: "react_rfid_init",
    message0: "%1 MFRC522 Init (SPI)  Pin CS%2 Pin RESET %3",
    args0: [
        {
            type: "field_image",
            src: ReactRFIDImg(),
            width: 85,
            height: 45,
        },
        {
            type: "field_dropdown",
            name: "CS_PIN",
            options: Blockly.Arduino.pinesNormal.digital 

        },
        {
            type: "field_dropdown",
            name: "RST_PIN",
            options: Blockly.Arduino.pinesNormal.digital 

        }
    ],
    colour: colorBluetooth
};
Blockly.Blocks['react_rfid_init'] = {
    init: function () {
        this.jsonInit(ReactRfidInit);
    }
};

//2

var ReactRfidNewcard = {
    type: "react_rfid_newcard",
    message0: " %1 %{BKY_NEWCARD} ",
    args0: [
        {
            type: "field_image",
            src: ReactRFIDImg(),
            width: 85,
            height: 45,
        },
       ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_rfid_newcard'] = {
    init: function () {
        this.jsonInit(ReactRfidNewcard);
    }
};

//3

var ReactRfidReaduid = {
    type: "react_rfid_readuid",
    message0: " %1 %{BKY_READUID} ",
    args0: [
        {
            type: "field_image",
            src: ReactRFIDImg(),
            width: 85,
            height: 45,
        },
       ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_rfid_readuid'] = {
    init: function () {
        this.jsonInit(ReactRfidReaduid);
    }
};
