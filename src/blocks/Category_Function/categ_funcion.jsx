import React from "react";
import * as Blockly from '../../blockly copy/blockly';
import {
    Category
} from "../../Blockly";
class Cate_funcion extends React.Component {
    render() {
        return (
            <Category id="category_functions" name="Function" custom="PROCEDURE"
            colour={Blockly.Arduino.colores.cate_procedure}
            >

            </Category>
            
        );
    }
}
export default Cate_funcion;
