import React from 'react'
import style from './project.scss'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import evolution from '../assets/SecurityTool/evolutiontimeline.png'
import bigraph from '../assets/SecurityTool/graphdemo.mp4'

class SecurityTool extends React.Component {
  render() {
    return (
      <div className={style.wrapper}> 
        <CloseNav/>  
        <div className={style.content}>  
            <section className={'six columns ' + style.centercontent}>
              <h3>Other Visualization Projects</h3>
              <p>With the company's large and complex security data collection, I have been designing and creating visualization tools.</p>
            </section>
             <section className={'eleven columns ' + style.center}>
                <figure className={'eight columns'}>
                  <img className={style.shadow} alt="" src={evolution}></img> 
                </figure>
                <div className={'five columns ' + style.side}>
                <h5>Visualizing the Evolution</h5>
                <p>Evolutionary data is a collection of past events and circumstances. Understanding it can be extremely valuable especially in analyzing the cadence of network. This visualization tool focuses on visualizing the key events for a group of domains, makes it easier to uncover patterns and isolate outliers.</p>
                    <a target="_blank" href='https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/'><button>Read Blog Post</button></a>
                </div>
              </section> 
              <section className={'eleven columns ' + style.center}>
            <figure className={'eight columns'}>
              <video id="video" className={'twelve columns'} src={bigraph} autoPlay='autoplay' playsInline loop> </video>
            </figure> 
              <div className={'five columns ' + style.side}>
              <h5>Visualizing Threat Distribution</h5>
                <p>This graph visualization is built to study the distribution of threat families across networks. The relationship of organizations infected by threats can be treated as a <span className={style.emp}>bipartite graph</span>. In this demo, the inner nodes with the brightest core have most connections. Similarly for the outer arcs, the brighter its outbound links are, the more threats it connects with. The user can select different nodes to enter focus mode, and further compare via pie charts or radial bars.</p>
              </div>
             </section>  
    
        </div>
          <PageNav nextPage='/ThreejsExp'/>
          <Footer/>
        </div>
    )
  }
}

export default SecurityTool;