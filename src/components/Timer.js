import React, { Component } from 'react';
import styled, {css} from 'styled-components';


const TimerBox = styled.div`
    color: #FFFFFF;
    text-align: center;
`
const TimerClock = styled.span`
  font-family: Montserrat;
       font-size: 5rem;
       font-weight: bold;
       margin-top: 0px;
       margin-bottom: 0px;
        font-style: italic;
`


class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {timerDuration :1500}
    }
    componentDidMount() {
        setInterval(()=>{
        this.setState({timerDuration: --this.state.timerDuration})
        }, 1000)
    }

    render() {
        return (
           <TimerBox>
               <TimerClock>{this.state.timerDuration}</TimerClock>
           </TimerBox>
        );
    }
}

export default Timer;
