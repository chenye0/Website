import React from 'react'
import style from './project.scss'
import { Link } from 'react-router'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import demo from '../assets/SecurityTool/dashboarddemo.mp4'
import demo1 from '../assets/SecurityTool/graphdemo.mp4'
import evolution from '../assets/SecurityTool/evolution.png'
import bg from '../assets/SecurityTool/wannacry.png'

const close = <svg fill="#1EAEDB" width="28" version="1.1" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 64 64" >
  <g> <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
  </g>
</svg>;

class SecurityTool extends React.Component {
  render() {

    return (
      <div className={style.wrapper}>
          <Link className={style.closebtn} to="/">{close}</Link>
      <div className={style.titlesection} style={{backgroundColor: '#333'}}>  
        <h1>My other Data Visualization Work</h1>    
      </div> 
      <div className={style.content}>          
          <section className={'ten columns'}>
            <h4>Projects</h4>
            </section> 
            <section className={'ten columns ' + style.center}>
              <figure className={'seven columns'}>
              <video id="video" className={'twelve columns'} src={demo1} autoPlay='autoplay' playsInline loop> </video>
              <figurecaption>A bipartite graph in circular layout</figurecaption>
              </figure>
              <div className={'five columns ' + style.side}>
                <h5>Visualizing a bipartite graph</h5>
                <p>I built this graph visualization to study the distribution of cyber threat families across networks. The relationship of organizations infected by threats can be treated as a bipartite graph. In this demo, the inner nodes with the brightest core have most connections. Similarly for the outer arcs, the brighter its outbound links are, the more threats it connects with. The user can select different nodes to enter focus mode, and further compare via pie charts or radial bars.</p>
            </div>
              </section>            
            <section className={'ten columns ' + style.center}>
              <figure className={'seven columns'}>
                <img className={'twelve columns ' + style.shadow}  alt="" src={evolution}></img> 
                <figurecaption>A visualization tool with a group timeline and box plot to explore the evolution of multiple entities</figurecaption>
              </figure>
              <div className={'five columns ' + style.side}>
                <h5>Visualizing the evolution</h5>
                  <p>Evolutionary data is a collection of past events and circumstances. Understanding it can be extremely valuable especially in analyzing the cadence of network. This viz tool focuses on visualizing the key events for a group of domains, makes it easier to uncover patterns and isolate outliers.</p>
                  <p className={style.source}>Read more in my blog post: <a href='https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/'>https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/</a></p>
              </div>
            </section> 
            <section className={'ten columns ' + style.center}>
              <figure className={'seven columns'}>
                <figurecaption>A visualization tool with a group timeline and box plot to explore the evolution of multiple entities</figurecaption>
              </figure>
              <div className={'five columns ' + style.side}>
                <h5>Visualizing the organization</h5>
                <p>Evolutionary data is a collection of past events and circumstances. Understanding it can be extremely valuable especially in analyzing the cadence of network. This viz tool focuses on visualizing the key events for a group of domains, makes it easier to uncover patterns and isolate outliers.</p>
              </div>
            </section>   
          </div>
          <PageNav nextPage='/FfRedesign'/>
          <Footer/>
        </div>
    )
  }
}

export default SecurityTool;