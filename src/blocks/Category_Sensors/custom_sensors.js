
import * as Blockly from '../../blockly copy/blockly';
import '../../fields/BlocklyReactField';
import '../../fields/DateField';
import { ReactSenPONTEImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactButtonImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactTactile } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactMotionDetector } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactDHTImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactFollowImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactGasImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactTemperaturaImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactColorImg } from '../Category_Sensors/Modulo_ImgSensors';
import { ReactLightReact } from '../Category_Sensors/Modulo_ImgSensors';


/* 1er Bloque */
var colorBluetooth = Blockly.Arduino.colores.cate_bucles
var ReactSensorPotentiometer = {
    type: "react_",
    message0: "%{BKY_SENSOR_POT}%1 Pin %2 %3",
    args0: [
        {
            type: "field_image",
            src: ReactSenPONTEImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.analog_2
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: [
                ["%", "%"],
                ["0..1023", "0..1023"],
            ]
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_potentiometer'] = {
    init: function () {
        this.jsonInit(ReactSensorPotentiometer);
    }
};

//2
var ReactButton = {
    type: "react_sensor_button",
    message0: "  %{BKY_SENSOR_BUTTON} %1 Pin %2 %{BKY_SENSOR_BUTTON_INVERT} %3 ",
    args0: [
        {
            type: "field_image",
            src: ReactButtonImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
        {
            type: "field_checkbox",
            name: "INVERT",
            checked:[
                ["TRUE","TRUE"],
                ["FALSE","FALSE"],
            ]
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_button'] = {
    init: function () {
        this.jsonInit(ReactButton);
    }
};
//3
var ReactSensorButtonDebounced = {
    type: "react_sensor_button_debounced",
    message0: "  %{BKY_SENSOR_BUTTON} %1 Pin %2  %3 %{BKY_SENSOR_BUTTON_INVERT}%4",
    args0: [
        {
            type: "field_image",
            src: ReactButtonImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
        {
            type: "field_dropdown",
            name: "STATUS",
            options: [
                ["Press", "pressed"],
                ["Release", "released"],
            ]
        },
        {
            type: "field_checkbox",
            name: "INVERT",
            checked: [
                ["TRUE", "TRUE"],
                ["FALSE", "FALSE"],

            ]
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_button_debounced'] = {
    init: function () {
        this.jsonInit(ReactSensorButtonDebounced);
    }
};

//4

var ReactSensorTouch = {
    type: "react_sensor_touch",
    message0: "  %{BKY_SENSOR_TOUCH} %1 Pin %2 ",
    args0: [
        {
            type: "field_image",
            src: ReactTactile(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_touch'] = {
    init: function () {
        this.jsonInit(ReactSensorTouch);
    }
};

//5
var ReactSensorPir = {
    type: "react_sensor_pir",
    message0: "  %{BKY_SENSOR_PIR} %1 Pin%2 ",
    args0: [
        {
            type: "field_image",
            src: ReactMotionDetector(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_pir'] = {
    init: function () {
        this.jsonInit(ReactSensorPir);
    }
};


//6
var ReactSensorDht11 = {
    type: "react_sensor_dht11",
    message0: " %{BKY_SENSOR_DHT11} %1 %2 Pin %3",
    args0: [
        {
            type: "field_image",
            src: ReactDHTImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "TYPE",
            options: [
                ["%{BKY_SENSOR_TEMPERATURE}", "temperature"],
                ["%{BKY_SENSOR_HUMIDITY}", "humidity"],
            ]
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_dht11'] = {
    init: function () {
        this.jsonInit(ReactSensorDht11);
    }
};

//7
var ReactSensorLinetracking = {
    type: "react_sensor_linetracking",
    message0: "  %{BKY_SENSOR_LINETRACKING} %1  Pin %2 ",
    args0: [
        {
            type: "field_image",
            src: ReactFollowImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.digital_4
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_linetracking'] = {
    init: function () {
        this.jsonInit(ReactSensorLinetracking);
    }
};
//8
var ReactSensorGas = {
    type: "react_sensor_gas",
    message0: "  %{BKY_SENSOR_GAS}%1 Pin %2 %3",
    args0: [
        {
            type: "field_image",
            src: ReactGasImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.analog_2
        },
        {
            type: "field_dropdown",
            name: "RANGE",
            options: [
                ["%", "%"],
                ["0..1023", "0..1023"],
            ]
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_gas'] = {
    init: function () {
        this.jsonInit(ReactSensorGas);
    }
};
//9
var ReactSensorlm35 = {
    type: "react_sensor_lm35",
    message0: "%{BKY_SENSOR_LM35} %1 %2 ",
    args0: [
        {
            type: "field_image",
            src: ReactTemperaturaImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.analog_2
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_lm35'] = {
    init: function () {
        this.jsonInit(ReactSensorlm35);
    }
};
//10
var ReactSensorColorTcs34725Value = {
    type: "react_sensor_color_tcs34725_value",
    message0: " %{BKY_SENSOR_COLOR}%1  %2 ",
    args0: [
        {
            type: "field_image",
            src: ReactColorImg(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "TYPE",
            options: [
                ["%{BKY_SENSOR_COLOR_RGB_R}", "0"],
                ["%{BKY_SENSOR_COLOR_RGB_G}", "1"],
                ["%{BKY_SENSOR_COLOR_RGB_B}", "2"],
                ["%{BKY_SENSOR_COLOR_RGB_CLEAR}", "3"],
                ["%{BKY_SENSOR_COLOR_HSV_H}", "4"],
                ["%{BKY_SENSOR_COLOR_HSV_S}", "5"],
                ["%{BKY_SENSOR_COLOR_HSV_V}", "6"],

            ]
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_color_tcs34725_value'] = {
    init: function () {
        this.jsonInit(ReactSensorColorTcs34725Value);
    }
};
//11
var ReactSensorLuz = {
    type: "react_sensor_luz",
    message0: "  %{BKY_SENSOR_LUZ}%1 %2 ",
    args0: [
        {
            type: "field_image",
            src: ReactLightReact(),
            width: 50,
            height: 40,
        },
        {
            type: "field_dropdown",
            name: "PIN",
            options: Blockly.Arduino.pinesNormal.analog_2
        },
    ],
    inputsInline: !0,
    output: "Number",
    colour: colorBluetooth
}
Blockly.Blocks['react_sensor_luz'] = {
    init: function () {
        this.jsonInit(ReactSensorLuz);
    }
};