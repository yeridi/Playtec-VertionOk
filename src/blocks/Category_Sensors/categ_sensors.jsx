import React from "react";
import {
    Block,
    Field,
    Category
} from "../../Blockly";
import "./custom_sensors";

class cate_bluetooth extends React.Component {

    render() {
        return (
            <Category id="category_Sensores" name="Sensors">

                <Block type="react_sensor_potentiometer"></Block>

                 <Block type="react_sensor_button">
                    <Field name="PIN">2</Field>
                </Block>

                <Block type="react_sensor_button_debounced">
                    <Field name="PIN">2</Field>
                </Block>

                <Block type="react_sensor_touch">
                    <Field name="PIN">2</Field>
                </Block>
                <Block type="react_sensor_pir">
                    <Field name="PIN">2</Field>
                </Block>
                <Block type="react_sensor_dht11">
                    <Field name="PIN">2</Field>
                </Block>
                <Block type="react_sensor_linetracking">
                    <Field name="PIN">2</Field>
                </Block>
                <Block type="react_sensor_gas"></Block>
                <Block type="react_sensor_lm35"></Block>
                <Block type="react_sensor_color_tcs34725_value"></Block>
                <Block type="react_sensor_luz"></Block>



            </Category>


        )
    }
}
export default cate_bluetooth