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
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '480px'}}>	
				<h1>Security Tool Design at Cisco</h1>		
			    <p>How might we present security data effectively to help security practitioners hunt down cyber threats?</p>  
			</div>
			<div className={style.content}>
	            <section className={'eight columns'}>
	          	  <h4>My Role</h4>
	              <p>I joined the Cisco Umbrella (formerly OpenDNS) security research lab team as an interaction designer. With the company’s huge collection of DNS data, I’ve had chance of designing with big data in a much more complicated context, which is challenging and exciting.</p>
		          <p>I am currently the product designer for <a href='https://umbrella.cisco.com/products/threat-intelligence'>Cisco Investigate</a>, for which I design intuitive interactions and interfaces that empower security practitioners to hunt down and mitigate network threats. More case studies coming soon!</p>
		        </section> 
		        {/*}
		        <section className={'eight columns'}>
	          	  <h4>Understand The User</h4>
	              <p>Before starting any design work, I spent a lot of time to understand how analysts and researchers work at present. Interviews, context inquiries and quietly observing how they respond to the tickets daily helped me gained a better understanding of security data, as well as how it’s being used in practice.</p>
		        </section> */}
		        <section className={'eight columns'}>
	          	  <h4>Projects</h4>
	              <p>To comply with my non-disclosure agreement, I’ve chosen to dispaly only a list of visualization tools I designed and developed that have been released publicly.</p>
	            </section> 
	            <section className={'ten columns ' + style.center}>
	     		  <figure className={'seven columns'}>
			        <video id="video" className={'twelve columns'} src={demo} autoPlay='autoplay' playsInline loop> </video>
			        <figurecaption>A tool featuring various data viz and linking-brushing techniques for bulk manual analysis</figurecaption>
		          </figure>
		          <div className={'five columns ' + style.side }>
			          <h5>A data viz tool for bulk analysis of network entities</h5>
			          <p>During the early research, the problem came to the surface that the analysts really need a effective way to look at many incidents together and find out the most malicious ones so that they could possibly catch up with the amount of tickets flowing into their mailbox. I started to design and implement this tool when I was an intern. It has been proved valuable and I am currently working with engineering team to productionalize it.</p>
			          <p className={style.source}>Watch a use case demo: <a href='https://youtu.be/y8TDGq-z6gg?t=3m32s'>https://www.youtube.com/watch?v=y8TDGq-z6gg</a></p>
		          </div>
	            </section>
	            <section className={'ten columns ' + style.center}>
	     		  <figure className={'seven columns'}>
			        <video id="video" className={'twelve columns'} src={demo1} autoPlay='autoplay' playsInline loop> </video>
			        <figurecaption>A bipartite graph in circular layout</figurecaption>
		          </figure>
		          <div className={'five columns ' + style.side}>
			          <h5>Visualizing a bipartite graph</h5>
			          <p>I built this graph visualization to study the distribution of cyber threat families across networks. The relationship of organizations getting infected by threats can be treated as a bipartite graph. In this demo, the inner nodes with the brightest core have most connections. Similarly for the outer arcs, the brighter its outbound links are, the more threats it connects with. The user can select different nodes to enter focus mode, and further compare via pie charts or radial bars.</p>
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
	        </div>
	        <PageNav nextPage='/FfRedesign'/>
	        <Footer/>
      	</div>
    )
  }
}

export default SecurityTool;