import React from 'react'

export default class logoBarra extends React.Component {
  
    render(){
        const size = this.props.size 
        return (
            <div class="nav-wrapper-bloques">

            <a href="http://playtecedu.com/herramientas">
                <img src={"http://playtecedu.com/plugins/blocklyduino/media/playtecrobot.gif"}
                    style={{ height:`${size}0px`, "margin-right": "0px", 'vertical-align': "middle" }} title="Hi!" />
            </a>
            <a href="http://playtecedu.com/herramientas" class="imagenes">
                <img src={"http://playtecedu.com/plugins/blocklyduino/logo.png"}
                    style={{ height: `${size}0px`, "margin-right": "0px", "vertical-align": "middle" }} title="Hi!" />
            </a>
        </div>

        )
    }
}
