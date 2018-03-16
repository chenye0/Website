import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import cat from '../assets/ThreeExp/cat.png'
import img1 from '../assets/ThreeExp/island.png'
import img2 from '../assets/ThreeExp/winterscene.png'
import style from './project.scss'


class ThreejsExp extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Link className={style.closebtn} to="/">CLOSE</Link>
        <div className={style.titlesection}>
          <h1>WebGL/Threejs Experiments </h1>
          <p>Amazed by the power of webGL and the richness of the content it can bring to the web, recently I am obsessed with learning and creating my own 3D content.</p>
        </div> 
        <div className={style.gallery}> 
          <div className={style.sketch}>
              <img role="presentation" src={img1}></img> 
              <div className={style.side}>
                <p>A palm island created with Blender3D, animated with Threejs. </p>
                <a href="https://chenye0.github.io/threejsPlay/">Interact with it </a>
              </div>
          </div>
          <div className={style.sketch}>
              <img role="presentation" src={img2}></img>
              <div className={style.side}>
              <p>Threejs animated scenes powered with webGL particle shaders.</p> 
              <a href="https://chenye0.github.io/threejsPlay/">Interact with it </a>
              </div> 
          </div>
          <div className={style.sketch}>
              <img role="presentation" src={cat}></img> 
              <div className={style.side}>
                <p>Nyanko-sensei(from anime Natsume's Book of Friends) </p>
                <a href="https://chenye0.github.io/threejsPlay/">Reference </a>
              </div>
          </div>
        </div>
        {/*
        <div className={style.content}> 
          <section className={'ten columns '+ style.center}>
            <figure className={'eight columns'}>
               <img role="presentation" src={cat}></img> 
            </figure>
            <div className={'three columns ' + style.side}>
              <p>A palm island created with Blender3D, animated with Threejs. </p>
              <button><a href="https://chenye0.github.io/threejsPlay/">Interact with it </a></button>
            </div>
          </section>
          <section className={'ten columns '+ style.center}>
            <figure className={'eight columns'}>
               <img role="presentation" src={img1}></img> 
            </figure>
            <div className={'three columns ' + style.side}>
              <p>A palm island created with Blender3D, animated with Threejs. </p>
              <button><a href="https://chenye0.github.io/threejsPlay/">Interact with it </a></button>
            </div>
          </section>
          <section className={'ten columns '+ style.center}>
            <figure className={'eight columns'}>
               <img role="presentation" src={img2}></img> 
            </figure>
            <div className={'three columns ' + style.side}>
              <p>Threejs animated scenes powered with webGL particle shaders.</p> 
              <button><a href="https://chenye0.github.io/ParticleExp/index.html">Interact with it </a></button>
            </div>
          </section>
        </div>
        <PageNav nextPage='/CandyBowl'/>
        <Footer/>
        */
        }
      
      </div>
    )
  }
}

export default ThreejsExp;