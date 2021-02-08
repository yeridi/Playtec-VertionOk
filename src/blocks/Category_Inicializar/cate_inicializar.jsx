import React from "react";
import * as Blockly from '../../blockly copy/blockly';
import {
    Block,
    Category
} from "../../Blockly";
import "./custom_inicializar";
class Cate_initial extends React.Component {

    render() {
        return (
            <Category id="category_initializes" name="Initializes"
            colour={Blockly.Arduino.colores.cate_inicializar}
            >
                <Block type="react_setup"></Block>
                <Block type="react_initializes_loop"></Block>
                <Block type="react_initializes_temp"></Block>
            </Category>
        );
    }
}
export default Cate_initial;
