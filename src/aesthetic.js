import * as React from 'react';
import './aesthetic.css';
import forestAud from './forest.mp3'
import oceanAud from './ocean.mp3'
import loungeAud from './jazzLounge.mp3'
import forestPic from './forestPic.jpg'
import cliffPic from './cliffPic.jpg'
import jazzPic from './jazzPic.jpg'


export default function Aesthetic(props) {
  const [state, setState] = React.useState({
    buttonName: "butt2",
    choice:0,
    clicked: 0,
  })
  const addNumb = (numb, check) => {
      setState({ ...state, numb: state.numb + numb })
  }
  const pickedLounge = () =>{
    var audio = new Audio(loungeAud);
    audio.play();
    setState({ ...state,  choice: 1})
  }
  const pickedOcean = () =>{
    var audio = new Audio(oceanAud);
    audio.play();
    setState({ ...state,  choice: 2})
  }
  const pickedForest = () =>{

    setState({ ...state,  choice: 3})
  }
  if (props.numb >= 15) {
    return (null)
  }
  if (props.numb > 7 && state.choice == 0) {
  return (
    
    <div className={state.numb > 7 ? 'buttonHoldHide' : 'buttonHold'}>
      <button className={state.buttonName} clicked={props.clicked} onClick= {() =>{pickedOcean()}}>
            Ocean Cliffside
        </button>
        <button className={state.buttonName} clicked={props.clicked} onClick= {() =>{pickedLounge()}}>
            Cozy Jazz Lounge
        </button>
        <button className={state.buttonName} clicked={props.clicked} onClick= {() =>{pickedForest()}}>
            Serene Forest
        </button>
    </div>
  );
} else if (state.choice == 1) {
  return (
    <div className= "backgroundImage" style = {{
    backgroundImage: `url(${jazzPic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
    }}>   
            </div>

  )
} else if (state.choice == 2) {
  return (
    <div className= "backgroundImage" style = {{
    backgroundImage: `url(${cliffPic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
    }}>  
          </div> 
  )
} else if (state.choice == 3) {
  return (
    <div className= "backgroundImage" style = {{
    backgroundImage: `url(${forestPic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
    }}>  
          </div> 
  )
}
}
