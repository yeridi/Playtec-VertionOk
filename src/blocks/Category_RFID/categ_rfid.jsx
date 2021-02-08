import React from "react";
import {
    Block,
    Field,
    Category
} from "../../Blockly"; 
import "./custom_rfid";

class cate_bluetooth extends React.Component {

    render() {
        return (
            <Category id="category_RFID" name="RFID">
                
                 <Block type="react_rfid_init">
                <Field name="CS_PIN">10</Field>
                <Field name="RST_PIN">9</Field>
            </Block>
             <Block type="react_rfid_newcard">
            </Block>   
            <Block type="react_rfid_readuid">
            </Block>  

            </Category>


        )
    }
}
export default cate_bluetooth