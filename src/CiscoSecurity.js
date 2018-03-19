import React from 'react'
import style from './project.scss'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import demo from '../assets/SecurityTool/dashboarddemo.mp4'
import bigraph from '../assets/SecurityTool/graphdemo.mp4'
import evolution from '../assets/SecurityTool/evolution.png'
import geo from '../assets/SecurityTool/GeomapUI.png'
import mindmap from '../assets/SecurityTool/mindmap.png'
import taskstep from '../assets/SecurityTool/tasksteps.png'
import flow from '../assets/SecurityTool/taskflow.png'
import bg from '../assets/SecurityTool/wannacry.png'

class SecurityTool extends React.Component {
  render() {

    return (
  		<div className={style.wrapper}>
        	<CloseNav/>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '480px'}}>	
				<h1>Security Product Design at Cisco</h1>		
			    <p>How might we present security data better to help security analysts investigate and mitigate network threats?</p>  
			</div> 
			<div className={style.overview}>
			  <section className={'eight columns'}>
	          	  <h4>My Role</h4>
	              <p>I joined Cisco Umbrella (formerly OpenDNS) security research lab team as an interaction design intern, and I am currently a product designer. With our huge collection of DNS data, I’ve had chance of designing with big data in a much complicated context, which is challenging and exciting. I’ve focused my time on several areas:</p>
		          <ul>
		              <li><b>User Research.</b> I conducted task analysis to understand user tasks in depth via various research methods and synthesized the results into actionable items.</li>
		              <li><b>Design.</b> As the product designer, I have redesigned the majority of <a href='https://umbrella.cisco.com/products/threat-intelligence'>Investigate</a> UI informed by research insights and validated through testing. It’s currently under development and will be rolling out new features soon.</li>
		              <li><b>Prototyping.</b> I have designed and developed analytical tools powered by data visualizations for security analysts to use.</li>
		          </ul> 
		        </section> 
	        </div>
			<div className={style.content}> 
		        <section className={'eight columns'}>
	          	  <h6>The Discovery</h6>
	          	  <h4>Task Analysis</h4>
	              <p>The primary persona is <b>security analyst</b>, whose main goal is to analyze incidents and related data to determine level of severity and remediation steps.</p>
	              <p>First of all, their work requires deep domain expertise in network security. Secondly, they need vast amount of data across various sources and systems. Lastly, it's time-sensitive decision making. Because it’s such an iterative and complicated process that requires a lot of cognitive activity, I conducted a task analysis to thoroughly understand their task in a big context.</p>
	              <figure className={style.centercaption}>
			      	<img className={'twelve columns '}  alt="" src={taskstep}></img> 
			        <figurecaption>Steps of the task analysis</figurecaption>
		          </figure>
		          <h5>Task Data Collection</h5>
		          <p>We have an internal team of security analysts who are dedicated to incident responses and threat hunting. With them, I utilized various user research methods to gather task data. Contextual Inquiry is a great research technique because observing and inquiring while the analysts are doing their day to day work provides much more details than solely asking them to describe and recall their task.</p>
				  <h5>Represent the User Knowledge</h5>
				  <p>When I firstly started talking with the analysts, they often take a quick glance at the web page and pivot to other views in a ‘random’ way, and they referred it as <span className={style.emp}>gut feeling</span>. After digging deeper, the gut actually came from many tiny pieces of insights they'd perceive and make sense of, which is actually traceable.</p>
		          <p>I created this mind map and reviewed it with the analysts to make sure it correctly captured the moving pieces in their mind when they investigate incident. The knowledge map raises question: Are we displaying the raw information well to support what they need to know?</p>
		          <figure className={style.centercaption}>
			      	<img alt="" src={mindmap}></img>
			      	<figurecaption>Mapping out the knowledge</figurecaption> 
		          </figure>
		          <h5>Visualize the Workflow</h5>
		          <p>With the knowledge they need to know, we want to learn more about what users has-to-dos. Through consolidating their task data, I divided them into basic actions represented as blocks, I visualized the analysts’ work flow as shown below.</p>
		          <figure className={style.centercaption}>
			      	<img alt="" src={flow}></img> 
			      	<figurecaption>High level analyst workflow</figurecaption> 
		          </figure>
		          <h5>Identify the Problem</h5>
		          <p>Examining the workflow together with the mind map helps me pinpoint the problems, such as critical bottlenecks, inconsistencies and frictions within main actions as well as the whole flow. Below are a few key issues among others:</p>
		           <ol>
		              <li>Information is presented poorly in supporting user knowledge, including hierarchy, taxonomy and mechanisms of display.</li>
		              <li>There is no effective way for performing bulk actions.</li>
		              <li>User loses context during pivot with too many tabs.</li>
		          </ol> 
		        </section>        
	                 
  				<section className={'eight columns'}>
  				  <h6>The Design</h6>
		          <h4>Projects</h4>
	              <p>The research has uncovered problems we could potentially solve within and beyond the current product and its functionalities. I’ve been designing and exploring solutions in various directions with the team. Below I’ve chosen to display a list of visualization tools I designed and developed that have been released publicly. More case studies are coming soon!</p>
	        
	          	  <h5>Geolocation UI Redesign</h5>
	              <p>Users need to analyze location data of network incidents, and they usually evaluate the locations of clients, hosts and registrants together. The old product UI displays all the above data points in a way that scattered through the page in a tabular format. I therefore redesigned it by displaying all the related data points together around a map visualization which provides geo intelligence immediately.</p>
	            </section>
		    
		        <figure className={'eight columns ' + style.shadow}>
		          <img alt="" src={geo} className={style.shadow}></img> 
		          <figurecaption>Investigate Geomap</figurecaption>
		        </figure>
		        <section className={'eight columns'}>
	          	   <h5>Bulk Analysis Dashboard</h5>
	          		<p>The problem came to the surface that the users need an effective way to look at many incidents together for patterns and outliers so that they could possibly catch up with the amount of tickets flowing into their email. I designed and implemented this tool since my internship. It has been proved valuable and I am currently working with engineering team to make it into production.</p>
			         <p className={style.source}>Watch a use case demo: <a href='https://youtu.be/y8TDGq-z6gg?t=3m32s'>https://www.youtube.com/watch?v=y8TDGq-z6gg</a></p>
		        </section>
     		  	<figure className={'eight columns'}>
			        <video id="video" className={'twelve columns'} src={demo} autoPlay='autoplay' playsInline loop> </video>
			        <figurecaption>A tool featuring various data visualizations and linking-brushing techniques for bulk manual analysis</figurecaption>
		        </figure>
		        <section className={'eight columns'}>
	          	  <h5>Visualizing the evolution</h5>
                  <p>Evolutionary data is a collection of past events and circumstances. Understanding it can be extremely valuable especially in analyzing the cadence of network. This visualization tool focuses on visualizing the key events for a group of domains, makes it easier to uncover patterns and isolate outliers.</p>
                  <p className={style.source}>Read more in my blog post: <a href='https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/'>https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/</a></p>
		        </section>
     		  	<figure className={'eight columns'}>
			       <img className={'twelve columns ' + style.shadow}  alt="" src={evolution}></img> 
			        <figurecaption>A visualization tool with a group timeline and box plot to explore the evolution of multiple entities</figurecaption>
		        </figure>
		        <section className={'eight columns'}>
	          	  <h5>Visualizing network threats distribution</h5>
                  <p>I built this graph visualization to study the distribution of cyber threat families across networks. The relationship of organizations infected by threats can be treated as a bipartite graph. In this demo, the inner nodes with the brightest core have most connections. Similarly for the outer arcs, the brighter its outbound links are, the more threats it connects with. The user can select different nodes to enter focus mode, and further compare via pie charts or radial bars.</p>
		        </section>
     		  	<figure className={'eight columns'}>
		       		<video id="video" className={'twelve columns'} src={bigraph} autoPlay='autoplay' playsInline loop> </video>
			        <figurecaption>A bipartite graph in circular layout</figurecaption>
		        </figure>   
	        </div>
	        <PageNav nextPage='/CityFact'/>
	        <Footer/>
      	</div>
    )
  }
}

export default SecurityTool;