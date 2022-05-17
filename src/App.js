import logo from './logo.svg';
import Aesthetic from './aesthetic.js'
import { Player, ControlBar } from 'video-react';
import Pokemon from './pokemon.mp4'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';

const script = [
  "Hello and Welcome Back",  //0
  "Congrats on making it through another day", //1
  "I'm sure it was difficult",            //2
  "Did the events of the day stress you out?",  //3
  "I find that hard to believe",                // 4
  "",                                           //5
  "I'm sorry that the world can be so scary",   // 6 
  "But you're here now so lets get you comfortable",  //7
  "What calming aesthetic can I help you explore", //8
  "",
  "This is nice", //10
  "You're bored aren't you...", //11
  "Did you know that you can't score a 299 in bowling?", //12
  "Did you know that crows hold grudges?", //13
  "Did you know that your friends invited you out tonight?", //14
  "Check out this video", //15
  "That was cool", //16

]  
  function App() {
  const [state, setState] = React.useState({
    numb: 16,
    buttonName: "butt",
    clicked: 1,
    buttonClicked: 1,
    isClicked:0,
    playVideo: false,
  })
  const reset = () => {
    if (state.numb == 4) {    
      setState({ ...state, numb: 3, clicked: 1, buttonClicked: 1 })
    }
  }
  const addNumb = (numb, check) => {
    if (check == 1) {
      reset(numb)
      if ((state.numb < 3 || state.numb > 5) && state.numb< 8) {
          setState({ ...state, numb: state.numb + numb, clicked: 1, buttonClicked: 1 })
      } else if (state.numb == 8) {
        setTimeout(function(){
          setState({ ...state, numb: 9, clicked: 1, buttonClicked: 1 })
        }, 3500)        
        setTimeout(function(){
          setState({ ...state, numb: 10, clicked: 1, buttonClicked: 1 })
        }, 13000)
        setTimeout(function(){
          setState({ ...state, numb: 11, clicked: 1, buttonClicked: 1 })
        }, 20000)
        setTimeout(function(){
          setState({ ...state, numb: 12, clicked: 1, buttonClicked: 1 })
        }, 27000)
        setTimeout(function(){
          setState({ ...state, numb: 13, clicked: 1, buttonClicked: 1 })
        }, 34000)
        setTimeout(function(){
          setState({ ...state, numb: 14, clicked: 1, buttonClicked: 1 })
        }, 41000)
        setTimeout(function(){
          setState({ ...state, numb: 15, clicked: 1, buttonClicked: 1 })
          Player.playVideo()
        }, 50000)
      }
    } if (check == 2) {
      setState({ ...state, isClicked: 1, buttonClicked: 1})
      setTimeout(function(){
        setState({ ...state, numb: state.numb + numb, clicked: 2, buttonClicked: 1 })
      }, 2000)
    }
  }
  const Words = (number) => {
    return (
      <div
        class={state.isClicked == 1  ? 'fade-in-text-hide' : 'fade-in-text'}
        clicked={state.clicked}
        onAnimationEnd={() => setState({ ...state, clicked: 0 })}
      >
        <p>{script.at(number)}</p>
      </div>
    )
  }
  const Question = (number) => {
    if (state.numb >= 3 && state.numb <= 6) {
      return (
        <div className={state.numb > 3 ? 'buttonHoldHide' : 'buttonHold'} >
          <button className={state.buttonName} clicked={state.buttonClicked} onClick={() => { addNumb(3, 2) }}>
            Yes
          </button>
          <button className={state.buttonName} clicked={state.buttonClicked} onClick={() => { addNumb(1, 2) }}>
            No
          </button>

        </div>
      )
    }
  }

  return (
    <div className="App" onClick={() => { addNumb(1, 1) }}>
      <header className="App-header">
      <Player
          playsInline
          fluid="false"
          width={40}
          height={22}
          className="player"
          
        >
            <source src={Pokemon} />
            <ControlBar autoHide={true} className="controlBar" />
         </Player>
        {Words(state.numb)}
        {Question(state.numb)}
         <Aesthetic numb= {state.numb} clicked = {state.clicked}></Aesthetic>
         
      </header>
    </div>
  );
}

export default App;
