import logo from './logo.svg';
import Aesthetic from './aesthetic.js'
import { Player, ControlBar } from 'video-react';
import Pokemon from './pokemon.mp4'
import Scary from './scary.mp3'
import "../node_modules/video-react/dist/video-react.css";
import * as React from 'react';
import KnockAud from './knock.mp3'
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
  "Isn't this relaxing?", //10
  "You're bored aren't you...", //11
  "Did you know that you can't score a 299 in bowling?", //12
  "Did you know that crows hold grudges?", //13
  "Did you know that your friends know y", //14
  "Hey check out this video!", //15
  "That was interesting", //16
  "...",
  "Click the box!",
  "Keep Going! Keep Clicking!",
  "Wow nice job", //20
  "Did you know 11% of people are left handed?",//21
  "Did you know a bear has 42 teeth",
  "Did you know 85% of plant life is found in the ocean",
  "Did you know Ralph Lauren's original name was Ralph Lifshitz",
  "Did you know rabbits like licorice",
  "Did you know the Hawaiian alphabet has 13 letters",
  "Did you know 'Topolino' is the name for Mickey Mouse Italy",
  "Did you know a lobsters blood is colorless but when exposed to oxygen it turns blueL",
  "Did you know armadillos have 4 babies at a time and are all the same sex",
  "Did you know reindeer like bananas", //30
  "...",//31
  "Don't listen to that",//32
  "You're safe here",//33
  "Click on the box!",//34
  "Come on! click on the box!",//35
  "The End"


]  
  function App() {
  const [state, setState] = React.useState({
    end: 0,
    numb: 0,
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
      } else if (state.numb == 15) {
        setTimeout(function(){
          var audio = new Audio(KnockAud);
          audio.play();
        }, 20000)
        setTimeout(function(){
          setState({ ...state, numb: 16, clicked: 1, buttonClicked: 1 })
        }, 18000)
        setTimeout(function(){
          setState({ ...state, numb: 17, clicked: 1, buttonClicked: 1 })
        }, 23000)
        setTimeout(function(){
          setState({ ...state, numb: 18, clicked: 1, buttonClicked: 1 })
        }, 25000)
        setTimeout(function(){
          setState({ ...state, numb: 19, clicked: 1, buttonClicked: 1 })
        }, 30000)
        setTimeout(function(){
          setState({ ...state, numb: 20, clicked: 1, buttonClicked: 1 })
        }, 35000)


        setTimeout(function(){
          setState({ ...state, numb: 21, clicked: 1, buttonClicked: 1 })
        }, 40000)
        setTimeout(function(){
          var scary = new Audio(Scary);
          scary.play();
          setState({ ...state, numb: 22, clicked: 1, buttonClicked: 1 })
        }, 43000)
        setTimeout(function(){
          setState({ ...state, numb: 23, clicked: 1, buttonClicked: 1 })
        }, 46000)
        setTimeout(function(){
          setState({ ...state, numb: 24, clicked: 1, buttonClicked: 1 })
        }, 48000)
        setTimeout(function(){
          setState({ ...state, numb: 25, clicked: 0, buttonClicked: 1 })
        }, 49000)
        setTimeout(function(){
          setState({ ...state, numb: 26, clicked: 0, buttonClicked: 1 })
        }, 50000)
        setTimeout(function(){
          setState({ ...state, numb: 27, clicked: 0, buttonClicked: 1 })
        }, 50500)
        setTimeout(function(){
          setState({ ...state, numb: 28, clicked: 0, buttonClicked: 1 })
          
        }, 51000)
        setTimeout(function(){
          setState({ ...state, numb: 29, clicked: 0, buttonClicked: 1 })
        }, 51500)
        setTimeout(function(){
          setState({ ...state, numb: 30, clicked: 0, buttonClicked: 1 })
        }, 52000)
        setTimeout(function(){
          setState({ ...state, numb: 31, clicked: 1, buttonClicked: 1 })
        }, 52500)

        setTimeout(function(){
          setState({ ...state, numb: 32, clicked: 1, buttonClicked: 1 })
        }, 55000)

        setTimeout(function(){
          setState({ ...state, numb: 33, clicked: 1, buttonClicked: 1 })
        }, 57000)
        setTimeout(function(){
          setState({ ...state, numb: 34, clicked: 1, buttonClicked: 1 })
        }, 59000)
        setTimeout(function(){
          setState({ ...state, numb: 35, clicked: 1, buttonClicked: 1 })
        }, 65000)
        setTimeout(function(){
          setState({ ...state, numb: 36, clicked: 1, buttonClicked: 1 })
        }, 70000)

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
  const box =(number) => {
    if (number == 18 || number == 19 || number ==20 || number == 34 || number == 35) {
    return (
        <div className="demo">
          <div
            className="box"
            onAnimationIteration={0}
          />
        </div>
    );
    } else {
      return (null)
    }
  }
  const player = (number) => {
  if (state.numb == 15) {
    return(
      <Player
       
          src={Pokemon}
          playsInline
          fluid={false}
          width={440}
          height={250}
          autoplay={true}
          className="player"
          onEnd
        >
            <ControlBar autoHide={true} className="controlBar" />
         </Player>
    )
  } else {
    return(null)
  }
  }

if (state.numb == 36) {
  return(
    <div className="App">
    <header className="App-header" >
    {Words(state.numb)}
    </header>
    </div>
  )
}
  return (
    <div className="App" end = {state.end} onClick={() => { addNumb(1, 1) }}>
      <header className="App-header" >

        {player(state.numb)}
        {Words(state.numb)}
        {box(state.numb)}
        {Question(state.numb)}
         <Aesthetic numb= {state.numb} clicked = {state.clicked}></Aesthetic>
         
      </header>
    </div>
  );
}

export default App;
