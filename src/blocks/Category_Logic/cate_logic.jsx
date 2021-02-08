import React from "react";
import * as Blockly from '../../blockly copy/blockly';
import {
    Block,
    Category
} from "../../Blockly";
import "./custom_Logic";
class Cate_logic extends React.Component {

    render() {
        return (
            <Category name="Logic"
            colour={Blockly.Arduino.colores.cate_logico}
            >
                <Block type="react_controls_if"></Block>
                <Block type="react_logic_compare"></Block>
                <Block type="react_logic_operation"></Block>
                <Block type="react_logic_negate"></Block>
                <Block type="react_logic_boolean"></Block>
            </Category>
        );
    }
}
export default Cate_logic;
