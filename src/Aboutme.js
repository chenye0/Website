import React from 'react'
import { Link } from 'react-router'
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
                  <p>Coming from engineering background, I’ve always enjoy building things, and have built intelligence racing car as well as optical displacement sensor with nanometer precision. I designed electronic circuits to make magic happen on the printed circuit board.</p>
                  <p>Then I became a designer. In the past few years, I have brought conceptual ideas to life while honing my craft and execution skills. Design has taught me to shift my eyes from technology to people, and approach problems from a different perspective. Now I am determined to continue solving real people problems with empathetic and innovative designs. </p>
                  <p>When I am not busy designing, I learn and experiment with new technology. I believe learning is a treasure and the only way to keep up with ever-changing world. Most recently, amazed by the power of webGL and the richness of content it can bring to the web, I’ve been creating my own 3D content.</p>
              </div> 
            
              <div className={style.contact}>
                <div> 
                <a href='http://www.linkedin.com/in/iamchenye'><div id={style.linkedin} className={style.social}></div></a>
                <a href='https://github.com/chenye0'><div id={style.github} className={style.social}></div></a>
                <a href='https://twitter.com/_chenye'><div id={style.twitter} className={style.social}></div></a>
                </div>
             </div> 
            </div>  
          </div>
        </div>
      );
  }
}



export default Aboutme;
