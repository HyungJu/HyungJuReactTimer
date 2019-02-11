import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faStop)
library.add(faPlay)

const FAButton = styled(FontAwesomeIcon)`
                font-size: 1.3rem;
                color: white;
            ${
    (props)=>props.isPlay == true && css`padding-left:0.2rem;`
    
  
    };
         `;

class StopButton extends Component {

    render() {
        return (
            <FAButton icon={this.props.isPlay?"play":"stop"} isPlay = {this.props.isPlay}/>
        );
    }
}

export default StopButton;
