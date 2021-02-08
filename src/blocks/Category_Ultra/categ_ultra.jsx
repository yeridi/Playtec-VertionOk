import React from "react";
import {
    Block,
    Category
} from "../../Blockly";
import "./custom_ultra";

class cate_bluetooth extends React.Component {

    render() {
        return (
            <Category id="category_Ultrasonic" name="Ultrasonic">
                 <Block type="react_ultra_setting"></Block>
                <Block type="react_ultra_distance"></Block> 
            </Category>


        )
    }
}
export default cate_bluetooth