import React from 'react'
import CloseNav from './CloseNav.js'
import selfpic from '../assets/thumbnail/cye.jpg'
import style from './home.scss'


class Aboutme extends React.Component {

  render() {
      return (
        <div className={style.wrapper}>
          <CloseNav/>
          <div className={style.about}>
            <div className={'six columns'}> 
                <img className={style.mypic} src={selfpic}></img>  
            </div>	
            <div className={'six columns'}>   
              <div className={style.myintro}> 
                  <h3>Hello!</h3>
                  <p>I am Chen Ye, a user experience designer based in San Francisco Bay Area.</p>
                  <p>Coming from engineering background, I’ve always enjoy building things. I have created intelligent racing car as well as optical displacement sensor with nanometer precision. I designed electronic circuits to make magic happen on the printed circuit board.</p>
                  <p>Then I became a designer. In the past few years, I have brought conceptual ideas to life while honing my craft and execution skills. Design has taught me to shift my eyes from technology to people, and approach problems from a different perspective. I am determined to continue solving real people problems with empathetic and innovative designs. </p>
                  <p>While I am not busy designing, I learn and experiment with new things. I believe learning is a treasure and the only way to keep up with this ever-changing world. Recently, amazed by the power of WebGL and the richness of content it can bring to the web, I’ve been creating my own 3D content.</p>
                  <p>If you want to learn more about what I do or just casual chat, feel free to drop me an email.</p>
                  <a href='https://drive.google.com/open?id=19152lISm5s70YAvs0JpqBjssiNMGjkaP'><button>View Resume</button></a>
              </div> 
            </div>  
          </div>
        </div>
      );
  }
}

export default Aboutme;
