import React from 'react'
import style from './project.scss'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import { Link } from 'react-router'
import bg from '../assets/Report/bg_dark.png'
import prob1  from '../assets/Report/prob1.png'
import prob2  from '../assets/Report/prob2.png'
// import prob3  from '../assets/Report/prob3.png'
import data  from '../assets/Report/Narrative.png'
import summary from '../assets/Report/summary1.png'
import animation from '../assets/Report/overview.mp4'
import infragraph from '../assets/Report/infragraph.mp4'
import findings from '../assets/Report/findings.mp4'

const close = <svg fill="#1EAEDB" width="28" version="1.1" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 64 64" >
  <g> <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
  </g>
</svg>;

class FfRedesign extends React.Component {
  render() {
    return (
  		<div className={style.wrapper}>
        	<Link className={style.closebtn} to="/">{close}</Link>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '480px'}}>
			    <h1>Cisco Umbrella Security Report</h1>
			    <p>How might we help customers uncover their network threats and understand the value of the product?</p>
			</div>
			<div className={style.overview}>
				<section className={'eight columns'}>
	          	  <h4>Project Overview</h4>
	          	  <p>Umbrella Security Report is an interactive web application for helping customers uncover their network threats, and understand how Cisco Umbrella can protect them. It turns complex security data into concrete and understandable data visualizations.</p>
	          	  <button className={style.reportbtn}><a href=''>View Site</a></button>
	          	  <h5>My Role</h5>
	              <p>I am the only designer working through the project since the initial kickoff meeting. I worked with a front-end engineer and a back-end engineer.</p>
	              <p>I was responsible for all the design executions and validations. I presented works to gain buy-in from executives and other teams for feedback. I built prototypes for some animations and interactions using JavaScript and CSS.</p>
	              <h5>The Impact</h5>
                  <p>In Nov 2016, three months after project kickoff, we shipped the alpha version internally, and the results have exceeded our expectations:</p>
	              <ul>
		              <li>Alpha version released in 3 months. Immediate and huge adoption internally.</li>
		              <li>Released to broader Cisco & partners with a marketing solution brief In March 2017.</li>
		              <li>2000+ report delivered. About 50 reports per week. Each eliminates half day of manual work.</li>
	              </ul>
		        </section> 
		    </div>
			<div className={style.content}>
		        <section className={'eight columns'}>
	          	  <h4>Background</h4>
	          	  <p>Cisco Umbrella is a cloud platform that provides DNS layer security to enterprises. Currently organizations that are interested in our product can sign up for free trials. At the end of the trial, internal sales engineers will gather and analyze all the threats identified during the trial, and then put together a pdf report to present to potential customers. The process is usually referred as proof of value (POV), which demonstrates the efficacy of the product, and is critical to business success.</p> 
		        </section> 
		         <section className={'eight columns'}>
	          	  <h4>The problem</h4>     	  
	              <p>There are some problems in this process. First of all sales engineers create these reports manually, which normally take half day to pull information out of dashboard, look into top security incidents, take screenshots across multiple sources and put together the slides. Since it requires certain knowledge about cyber security and the trending attack campaigns, sometimes a security analyst from the research team will help out as well. Furthermore, when I looked into the current pdf report, it contains many screenshots, heavy text and long lists of incidents. Therefore, we defined two main problems to solve for this project.</p>
		        </section> 
		        <section className={'eight columns'}>
		        	<ul className={style.illustration}>
		              <li className={'four columns'}> <img alt="" src={prob1}></img><h6>Manual Work</h6> Manual work is time-consuming and prone to errors.</li>
		              <li className={'four columns'}> <img alt="" src={prob2}></img><h6>Buried insights</h6>Data insights and value are buried in text heavy slides.</li>
		           </ul>
		        </section>
		        <section className={'eight columns'}>
		           <h4>Persona</h4>
		           <p>The primary persona is <b>potential customer</b> who is interested in our security product, and need to understand how effective our product is. The main stakeholder is <b>internal sales engineer</b>, who really need an efficient way to analyze an organizations’ threats and present the results to engage their potential customers. </p>
		     	</section>
		        <section className={'eight columns'}>
		          <h6>The Process</h6>
	              <h4>Direction</h4>
                  <p>After initial ideation, we decided on a high level design direction: build a web application utilizing storytelling with interactive data visualizations, because:</p>
                    <ul>
		              <li>Stories are effective tools for human communication </li>
		              <li>Visuals are easier to digest than pure numbers. Interactions allow changing view to answer particular questions</li>	           
		              <li>Web app is great for automation to replace manual tasks</li>
		              <li>Modern web technology is more capable of displaying and handling large dataset</li>
		          </ul>
		         </section>
		         <section className={'eight columns'}>
	          	  <h4>Construct the Flow and Hierarchy</h4>
	              <p>To design for storytelling, the challenge is to structure the web app as a coherent flow like telling a story, while properly hide the details only to be revealed when requested (e.g. when the customer interrupt and get intrigued by specific piece of the story). With the information I gathered from the research, I started with writing the narratives, imagining myself as a sale engineer walking through the results with customers.</p>
	              <p>Meanwhile I started to map the data to the story. During this exercise visualization ideas sprang up in my head.</p>
	               <img alt="" src={data}></img> 
	               <figurecaption>Figure. The narrative flow and data mapping </figurecaption>
	               <h4>Ideation & Feedback Loop</h4>
                   <p>I started sketching idea on papers with the above flow. At first I didn’t constrain myself with any technologies, so crazy ideas came up, such as telling the story with presenting and manipulating 3D graph. After a few sync up  with the engineers, we narrowed down to one idea that we all agreed upon as a great fit for MVP, which would achieve our goals with the least amount of dev work.</p>
                   <p>Being able to involve the sales engineers from the beginning really helped keeping this project fast and on track. Soon after I came up with the first wireframe, I presented the design during the Sales weekly meeting. Then based on their feedback, I went back to iterate on my design.</p>
		        </section>   
		        <section className={'eight columns'}>
	          	  <h4>Detailed Design</h4>
	          	  <p>The final solution is a fully interactive web app consisted of concrete and understandable data visualizations. A user could use the main in-page navigation buttons to follow the story, or use the side menu to jump to any view they are particularly interested in. Below I selected a few pages for core user stories from the app for demo.</p>  
	          	  <h5>Intelligence Overview</h5>
	          	  <p>Users want to understand how the product generall works first. I designed a short series of animating graphs to illustrate the intelligence and the value of our security research and realized it with javascript.</p>   
	              <video id="video" className={'twelve columns'} src={animation} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 1. Intelligence Overview </figurecaption>
	            </section>
	            <section className={'eight columns'}>
	               <h5>Executive Summary</h5>
	               <p>After getting a sense of what the technology is, users need to see the real proof of the security solution. First of all, a high level summary of the findings is provided, so that users could immediately know the overall number of requests and threats in their environments.</p>
	                <img alt="" src={summary}></img> 
	                <figurecaption>Demo 2. Executive Summary </figurecaption>
	             </section>
	            <section className={'eight columns'}>
	               <h5>Significant Findings</h5>
	               <p>Users usually want to know deeper about the types of network threats Cisco Umbrella can identify in their environment. With this view of bubble visualization, a user can get a sense of the scope and diversity of their threats. They can also interact with the bubbles to find more details. Usually outliers such as giant individual bubbles will catch eyes immediately and lead to further discussion. Moreover, being able to switch to a timeline view allows them to learn how bubbles (incidents) spread over time.</p>
	               <blockquote>“I use this to capture the scope and breadth of what we found in the POV. I will focus on one or two “bubbles” or categories I know are important to the customers” -- A Customer Success Manager</blockquote>
	                <video id="video" className={'twelve columns'} src={findings} playsInline autoPlay="autoplay" loop> </video>
	                <figurecaption>Demo 3. Significant Findings </figurecaption>
		        </section> 
	            <section className={'eight columns'}>  
	          	  <h5>Attack Infrastructure </h5>
	              <p>Users are particularly interested in ransomware, because they’ve suffered an attack in the past. To support this case, a user can firstly navigate to any threat family they are interested through the main navigation, and learn different aspects of the attack. For example, this slightly different graph was particularly polished for our data story: starting from any node in a network, we are able to mine deeper in the global security graph and unveil a full picture of the attack infrastructure.</p>
	              <blockquote>“It helps us explain why we might think something (or know) something is malicious, based on the IP address or name server it is resolving to. I will often pivot into the product” -- A Sales Engineer</blockquote>
	              <video id="video" className={'twelve columns'} src={infragraph} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 4. Attack Infrastructure</figurecaption>
	            </section>
		         <section className={'eight columns'}>
		         	<h4>Challenges</h4>
		         	<h5>Design visualization for unexpected data</h5>
		         	<p>Edge cases always exist in the real data, even after I took some time on studying the scale and the characteristics of the data. We hardly know how a future customer’s data looks like exactly and might break the design. For example, the bubble chart went crazy a few times and the animations just took minutes to complete because some attack outbreak on the network resulted in a huge amount of bubbles.</p>
		         	<h5>Automation & Control</h5>
		         	<p>In a survey we sent out later on for feedback, the topic <b>customization</b> came up frequently in the responses. We wanted to make the creation process effortless by automating it as much as possible. Yet the more you automate, the more problem you will have with trust and control. It’s actually difficult for the program to always capture the best stories, which might otherwise be discovered through manual lookup.</p>
		         </section>
		         <section className={'eight columns'}>
	          	  <h4>Outcome</h4>
	              <p>In Nov 2016, we shipped alpha version internally. Since then, sales engineers and customer success team started trying it out, and now they use it in their daily work.</p>
	              <p>In March 2017, it was released to broader Cisco including partners around the world. Meanwhile, <a href='https://learn-umbrella.cisco.com/solution-briefs/umbrella-security-report'>a marketing solution brief</a> has been published.</p>
	              <p>The project is successfully built out from a culture around shipping fast and deploying constantly. It has brought huge value to our customers, internal teams and the business unit.</p>
	            </section>  
	            {/*
		         <section className={'eight columns'}>
		         	<h4>Reflection</h4>
		         	<h5>Iterate Fast and SHIP</h5>
		         	<p>Our small team executed very fast, with nearly no lag of response nor miscommunication. I worked close with the developer, and was able to explain the UI components and interactive behaviors to him right away, which saves time from my prototyping phase. I was fortunate to experience ‘Iterate Fast’ in a real world. After we pushed it out only after three months, the whole company saw the value and provided us more resources.</p>
		         	<h5>Handle with More Voices</h5>
		         	<p>It certainly feels accomplished when people start to use the tool and acknowledge the value, yet more voices came in. People of different teams carrying various perspectives all have opinions on the big picture and next step of the project. As a designer it is critical to drive the focus and strive for making things that’s truly valuable to users.</p>
		         </section>   */}       
	        </div>
	        <PageNav nextPage='/Securitytool'/>
	        <Footer/>
      	</div>
    )
  }
}

export default FfRedesign;