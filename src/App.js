import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import StopButton from "./components/StopButton";

class App extends Component {

  render() {
    const App = styled.div`
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      background-color: #212121;
    `;
    const FlexBox = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      text-align: center;
      flex-direction: column;   
    `;
    const StopBox = styled.div`
      height: 1.3rem;
      width: 1.3rem;
      padding:1rem;
      border: 1px solid white;
      border-radius: 50px;
      margin-top:40px; 
    `;
    return (
        <App>
          <FlexBox>
            <StopBox>
                <StopButton isPlay={true}/>
            </StopBox>
          </FlexBox>
        </App>
    );
  }
}

export default App;
