import React from 'react'
import style from './project.scss'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import bulk from '../assets/Product/Bulk.png'
import data from '../assets/Product/Timeline.png'
import taskstep from '../assets/SecurityTool/tasksteps.png'
import task from '../assets/SecurityTool/taskflow.png'
import quote1 from '../assets/SecurityTool/quote1.png'
import quote2 from '../assets/SecurityTool/quote2.png'
import geo from '../assets/Product/Geomap.png'
import mindmap from '../assets/SecurityTool/mindmap.png'
import journey from '../assets/SecurityTool/Journey.png'
import bg from '../assets/SecurityTool/bg1.png'
import heroimage from '../assets/SecurityTool/desktop.png'
import filter from '../assets/Product/Filter.png'
import summary from '../assets/Product/Layout.png'
import customize from '../assets/Product/Customize.png'
import layout from '../assets/Product/Layout.png'
import timeline from '../assets/Product/newUI.png'
import input from '../assets/SecurityTool/input.png'

const pcolor = '#555559';

class SecurityTool extends React.Component {
  render() {

    return (
  		<div className={style.wrapper}>
        	<CloseNav/>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '430px'}}>	
				<h1>Cisco Umbrella Investigate</h1>		
			    <p>A threat intelligence tool that provides data insights into domains, IP addresses and other network entities, to help security analysts predict and uncover network threats.</p>  
			</div> 
			<div className={style.overview}>
		        <section className={'eight columns'}>
		           <img alt="" src={heroimage}></img> 
		        	<h5>My Role</h5>
	              	<p>I am currently the main product designer for Cisco Investigate. I’ve focused my time on several areas:</p>
		          	<ul>
		              <li><b>User Research:</b> synthesize customer research, product analytics and roadmap into actionable insights.</li>
		              <li><b>Design:</b> work on the major product redesign through validations with users.</li>
		              <li><b>Implementation:</b> collaborate with product manager and a team of developers, and oversee every detail along the entire process.</li>
		              <li><b>Prototyping:</b> implemented initial prototype to gain buy-in and facilitate early testing.</li>
		          	</ul> 
		        </section>
		    </div> 
			<div className={style.content}> 

		        <section className={'eight columns'}>
	          	  <h3>Research</h3>
	              <p>The primary persona is <b>security analyst</b>, whose main goal is to analyze incidents and related data to determine level of severity and remediation steps. I conducted a task analysis to thoroughly understand user tasks in the big context.</p>
	              {/*
	              <p>First of all, their work requires deep domain expertise in network security. Secondly, they need vast amount of data across various sources and systems. Lastly, it's time-sensitive decision making. Because it’s such an iterative and complicated process that requires a lot of cognitive activity, I conducted a task analysis to thoroughly understand user tasks in the big context.</p>*/}
	              <figure>
	              <img alt="" src={taskstep}></img> 
		          </figure>
		          <h5>What does the user need to know?</h5>
		          <p>In order to represent the knowledge and understand what users need to know, I created this mind map and reviewed it with the analysts to make sure it has correctly captured their thoughts when they look up incidents.</p>
		          <figure>
			      	<img alt="" src={mindmap}></img>
			      	<figurecaption>Figure. Mapping out the knowledge</figurecaption> 
		          </figure>
		          <h5>What does the user have to do?</h5>
		          <p>Visualizing the workflow allows me to learn more about what users has-to-dos. I divided the task data into basic actions represented as blocks, and drew the user task flow as shown below.</p>
		          <figure>
		           <img alt="" src={task}></img>
			      	<figurecaption>Figure. High level analyst workflow</figurecaption> 
		          </figure>
		          <h5>What are the key frictions?</h5>
		          <p>Examining the workflow together with the mind map helps me pinpoint the problems, such as bottlenecks, inconsistencies and frictions within main actions as well as the whole flow. The main problems are: </p>
		            <ul>
		      		  <li>Ineffective Information representation</li>
		              <li>No effective way for bulk actions</li>
		              <li>Lack of context during pivot and navigation</li>
		          	</ul> 
		           <p>We broke down the problems into smaller pieces to make sure the team can focus and ship value incrementally.</p>
		        </section> 
		       
		        <section className={'eight columns'}>
		   			<h4>User Journey</h4>
		            <img alt="" src={journey}></img>
		        </section> 
		        <section className={'eight columns'}>
		        </section> 
		        <section className={'twelve columns ' + style.fullbg}>
		         <div className={'eight columns'}>
	              <h3>Project 1: Bulk Analysis Dashboard</h3>
	              <p>During triage process, users need to analyze multiple domains together, so that they can locate suspicious domains, identify patterns/outliers efficiently.</p>
	              <p>Today, they don't have a tool and end up with multiple browser tabs to switch back and forth.</p>
	             </div>
	             </section>
		        {/*
		        <section className={'eleven columns ' + style.center}>
		            <figure className={'eight columns'}>
		              <img className={style.shadow} alt="" src={input}></img> 
		            </figure>
		            <div className={'five columns ' + style.side}>
		           	  <h5>Bulk Input</h5>
		              <p>Users can enter a list of domain names in the text field, or upload a csv file to get started.</p>
		  	        </div>
	           </section> */}
	           	<section className={'eight columns'}>
	           		<img alt="" src={quote1}></img>
					<h5>Overview</h5>
					<p>Brian enters the 89 incidents of domains in the tool , and gets an overview of all the related data, which is represented in two visualizations and one table. All the views are linked together to facilitate analysis.
					</p>
	           </section> 
	            <figure className={'eleven columns ' + style.annotation}>
		            <img alt="" src={bulk}></img> 
		        </figure>
		        {/*
	           <section className={'eight columns'}>
					<h5>Customize</h5>
					<p>Brian customizes the view by turning on/off different features in the visualization to get a simplified and focused view, for his particular use cases.</p>
	           </section> 
	            <figure className={'eleven columns ' + style.annotation}>
	              <img alt="" src={customize}></img> 
	           </figure> */}
	           	<section className={'eight columns'}>
		           	<h5>Filter and Brush</h5>
		            <p>Brian applies filters on parallel coordinate to find domains with contradictory features. He selects domains without a category (N/A) but have been flagged (Positives) from other resources. 7 domains match his filters and the table updates accordingly.</p>
		             <p>He chooses to keep selected domains only, and opens them in <b>Investigate domain view</b>.</p>
	           </section> 
	            <figure className={'eleven columns ' + style.annotation}>
	              <img alt="" src={filter}></img> 
	            </figure>
		        <div className={'twelve columns ' + style.fullbg}>
		         <div className={'eight columns'}>
	              <h3>Project 2: Domain View Redesign</h3>
	              <p>Today, the product UI is not presenting the data effectively in supporting user making decisions.</p>
	              <p>Domain view, which is the most important page, needs to be improved in terms of information hierarchy, taxonomy and mechanisms of display. </p>
	              </div>
	             </div>  
	              <section className={'eight columns'}>
	              	<img alt="" src={quote2}></img>         
	                <p><b >Efficiency</b> is key to our users as they need to make time sensitive decisions. I did a full redesign for the domain view with the following improvements (below are selected features within the domain view).</p>
		           	<h5>Restructure the Layout </h5>
		           	<p>I started with grouping all the data points into five chunks: Risk Summary, Timeline, Geolocation, Connections, Identity. Chunking logically helps providing context to any individual data point, and makes it easy to digest.</p>
		           	<p>I restructured the page by prioritizing the most important information to the top of the page. The redesigned layout is shown below (details obscured).</p>
		           	<img alt="" src={summary}></img>
	            </section>
	            <section className={'eight columns '}>
		           	  <h5>Improve Graphic Representation</h5>
		           	  <p>In order to help users interpret data efficiently, the redesign uses more graphics and visualizations.</p>
		           	  <p>One example is the redesigned location data. It's one single component contains location data all together for quick glance. Users can read different type of location data on the map and identify contradictory information immediately.</p>
	            </section>
	            <figure className={'twelve columns ' + style.annotation}>
		            <img alt="" src={geo}></img> 
		        </figure> 
	            <section className={'eight columns'}>
		           	<h5>Fuse Data to Provide Summary</h5>
		           	<p>To reduce cognitive load, the design focuses on bringing together lower level raw data into a higher level summation.</p>
	            </section>
	            <figure className={'twelve columns ' + style.annotation}>
		            <img alt="" src={data}></img> 
		        </figure> 
		         <section className={'eight columns'}>
		         </section>    
	           <section className={'eight columns'}>
					<h3>Implementation</h3>
					<p>Working in a highly iterative product team, I collaborate closely with product managers and engineering leader in the early stage for feature planning. I sync up with engineers constantly to present my design and understand technical constraints and data edge cases from them. </p>
					<p>During implementation we utilize InVision and internal design systems (DPL, CoreCSS library) to make sure designs are well implemented. After features go in limited availability, I work with customer success team and product manager to attend customer calls, collect feedback or bugs and make sure they are logged and will be addressed in next iteration.</p>
	           </section> 

	           {/*
	           <section className={'twelve columns ' + style.fullbg}>  
	            	<div className={'six columns ' + style.centercontent}>
		              <h3>Other Projects</h3>
		              <p>With the company's large and complex security data collection, I have been designing and creating visualization tools.</p>
		              </div>
	            </section> 
	           <section className={'eleven columns ' + style.center}>
		            <figure className={'eight columns'}>
		              <img className={style.shadow} alt="" src={evolution}></img> 
		            </figure>
		  	        <div className={'five columns ' + style.side}>
		           	<h5>Visualizing the Evolution</h5>
		         	<p>Evolutionary data is a collection of past events and circumstances. Understanding it can be extremely valuable especially in analyzing the cadence of network. This visualization tool focuses on visualizing the key events for a group of domains, makes it easier to uncover patterns and isolate outliers.</p>
                   	<a href='https://umbrella.cisco.com/blog/2016/11/03/visualizing-the-evolution/'><button>Read Blog Post</button></a>
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
	           </section>  */} 
	        </div>
	        <PageNav nextPage='/CityFact'/>
	        <Footer/>
      	</div>
    )
  }
}

export default SecurityTool;