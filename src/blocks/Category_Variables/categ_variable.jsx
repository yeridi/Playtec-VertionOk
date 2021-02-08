import React from "react";
import * as Blockly from '../../blockly copy/blockly';
import {
    Block,
    Category
} from "../../Blockly";
import "./custom_variable";
class Cate_variable extends React.Component {

    render() {
        return (
            
            <Category name="Variables" custom="VARIABLE"
            colour={Blockly.Arduino.colores.cate_variables}
            >
                <Block ></Block>
            </Category>
        );
    }
}
export default Cate_variable;
