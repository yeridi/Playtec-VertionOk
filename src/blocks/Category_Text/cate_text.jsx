import React from "react";
import * as Blockly from '../../blockly copy/blockly';
import {
    Block,
    Category
} from "../../Blockly";
import "../../Code/Arduino";
import "./custom_text";
class Cate_Text extends React.Component {

    render() {
        return (
            <Category name="Text" 
            colour={Blockly.Arduino.colores.cate_text}
            >
                <Block type="react_text"></Block>
                <Block type="react_textapos"></Block>
                <Block type="react_comment_out"></Block>
            </Category>
        );
    }
}
export default Cate_Text;