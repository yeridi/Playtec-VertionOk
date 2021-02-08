
import * as Blockly from '../../blockly copy/blockly';
import '../../fields/BlocklyReactField';
import '../../fields/DateField';
import { ReactULTRAImg } from '../Category_Ultra/Modulo_ImgUltra';


/* 1er Bloque */
var colorBluetooth = Blockly.Arduino.colores.cate_bucles
var ReactUltraSetting = {
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    type: "react_ultra_setting",
    message0: "%1 Pin Trig %2 Echo %3",
    args0: [
        {
            type: "field_image",
            src: ReactULTRAImg(),
            width: 64,
            height: 64,
        },
        {
            type: "field_dropdown",
            name: "TRIG",
            options: Blockly.Arduino.pinesNormal.digital
        },
        {
            type: "field_dropdown",
            name: "ECHO",
            options: Blockly.Arduino.pinesNormal.digital
        },
    ],
    colour: colorBluetooth
};
Blockly.Blocks['react_ultra_setting'] = {
    init: function () {
        this.jsonInit(ReactUltraSetting);
    }
};
//2
var ReactUltraDistance = {
    type: "react_ultra_distance",
    message0: " %1 %{BKY_MAXRANGE}%2 ",
    args0: [
        {
            type: "field_image",
            src: ReactULTRAImg(),
            width: 64,
            height: 64,
        },
        {
            type: "field_dropdown",
            name: "distance",
            options: [
                ["cm","cm"],
                ["inch","inch"],
            ]
        },
       ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_ultra_distance'] = {
    init: function () {
        this.jsonInit(ReactUltraDistance);
    }
};
