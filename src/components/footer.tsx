import React, { Component } from 'react'
import "../css/components.css"


interface Props {

}
interface State {

}

export default class Header extends Component<Props, State>{
    state = {

    }

    render() {
        return (
            <div className='footer'>
                <h5 style={{color:'white', padding:"20px 20px"}} >ACB (Pvt) LDT 2022</h5>

            </div>
        )

    }
}