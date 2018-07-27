import React from 'react'
import style from './project.scss'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import CloseNav from './CloseNav.js'
import bg from '../assets/Report/landing.png'
import prob1  from '../assets/Report/prob1.png'
import prob2  from '../assets/Report/prob2.png'
import heroimage  from '../assets/Report/heroimage.png'
import data  from '../assets/Report/journey.png'
import summary from '../assets/Report/demo2.mp4'
import visualguide from '../assets/Report/VisualGuide.png'
import animation from '../assets/Report/demo1.mp4'
import infragraph from '../assets/Report/demo4.mp4'
import findings from '../assets/Report/demo3.mp4'

const pcolor = 'blue';

class Report extends React.Component {
  render() {
    return (
  		<div className={style.wrapper}>
        	<CloseNav/>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '430px'}}>
			    <h1>Cisco Umbrella Security Report</h1>
			    <p>How might we help customers uncover their network threats and understand the value of the product?</p>
			</div>
			<div className={style.overview}>

			 <img className={'ten columns'} alt="" src={heroimage}></img>
				<section className={'eight columns'}>
	          	  <h4>Project Overview</h4>
	          	  <p>Cisco Umbrella Security Report is an interactive web application for helping customers uncover their network threats, and understand how Cisco Umbrella can protect them. It turns complex security data into concrete and understandable data visualizations.</p>
	          	  <h5>My Role</h5>
	              <p>I <b>own</b> the design of this project. I collaborated with two developers and shipped the project. I presented works to gain buy-in from stakeholders. I built prototypes for some animations and interactions.</p>
		          <h5>The Impact</h5>
	              <ul>
		              <li>Alpha version released in 3 months. Immediate and huge adoption internally.</li>
		              <li>Released to broader Cisco & partners with <a target="_blank"  href='https://learn-umbrella.cisco.com/solution-briefs/umbrella-security-report'>a marketing solution brief</a> in March 2017.</li>
		              <li>2000+ reports have been delivered so far. Each eliminates half day of manual work.</li>
	              </ul>        	
	            </section>  
		    </div> 
			<div className={style.content}>
		        <section className={'eight columns'}>
	          	  <h4>Background</h4>
	          	  <p>Cisco Umbrella is a cloud platform that provides DNS layer security. Currently organizations that are interested in our product can sign up for free trials. At the end of the trial, internal sales engineers will gather and analyze all the threats identified during the trial, and put together slides to present to potential customers. The process is usually referred as proof of value (POV), which demonstrates the efficacy of the product, and is critical to business success.</p> 
		        </section> 
		         <section className={'eight columns'}>
	          	  <h4>The Problem</h4>     	  
	              <p>First of all, customers receive results delivered in pdf, which contains lots of screenshots, heavy text and long lists of incidents. It’s not easy to digest and see the full picture. Furthermore, our sales engineers need to create the pdfs manually, which normally takes half day to pull data from dashboard, run some script, take screenshots from products and put together the slides. Therefore, we have two main problems to solve.</p>
		        </section> 
		        <section className={'eight columns'}>
		        	<ul className={style.illustration}>
		              <li className={'four columns'}> <img alt="" src={prob2}></img><h6>Buried Insights</h6>Data insights and value are buried in text heavy slides.</li>
		              <li className={'four columns'}> <img alt="" src={prob1}></img><h6>Manual Work</h6> Manual work is time-consuming and prone to errors.</li>
		           </ul>
		        </section>
		        <section className={'eight columns'}>
		           <h4>Persona</h4>
		           <p>The primary persona is <b>potential customer</b> who is interested in our security product. They need to clearly see the proof for the efficacy of our product. The secondary persona as well as stakeholder is <b>internal sales engineer</b>, who needs an efficient way to analyze an organization's threats and present the results in an engaging way. </p>
		     	</section>
		        <section className={'eight columns'}>
	              <h4>Direction</h4>
                  <p>After initial ideation, we decided on a high level design direction: build a web application utilizing storytelling with interactive data visualizations, because:</p>
                    <ul>
		              <li>Stories are always effective for human communication </li>
		              <li>Visualization makes it possible to approach and interpret complex data</li>	           
		              <li>Web application is great for automating manual tasks</li>
		              <li>Modern web technology is more capable of displaying and handling large dataset</li>
		          </ul>
		         </section>
		         <section className={'eight columns'}>
	          	  <h4>Storymapping the Experience</h4>
	              <p>The design challenge is to structure the web app as a coherent flow like telling a story. With the information I gathered from the research, I mapped out this story a user would experience through the app.</p>
	              <p>Crafting this journey was a great way to also structure the data and other content. I started to connect information to the flow. During this exercise a lot of visualization ideas sprang up.</p>
	               <img alt="" src={data}></img> 
	               <figurecaption>Figure. The user journey with storyline at the top and mapped content below.</figurecaption>
		        </section> 
		        {/* 
		        <section className={'eight columns'}>
		           <h4>Ideation & Feedback Loop</h4>
                   <p>I started sketching out idea on papers with the above flow. At first I didn’t constrain myself with any technologies, so crazy ideas came up, such as telling the story by presenting and manipulating 3D graph. After discussing with the engineer, we narrowed down to one idea that as MVP.</p>
                   <p>Soon after I had the first wireframe, I presented it to the entire sales engineering team, and then iterated on my design based on the feedback.</p>
		        </section>   */}
		        <section className={'eight columns'}>
	          	  <h4>Detailed Design</h4>
	          	  <p>The final solution is an interactive web application consisted of concrete and understandable data visualizations. A user can navigate with in-page buttons to follow the story, or use the menu to jump to any pages they are interested in. Below I've selected pages for a few core user stories.</p>  
	          	  <h5>Intelligence Overview</h5>
	          	  <p>Users want to understand how the product generally works first. I designed a short series of animating graphs to illustrate the intelligence and the value of our security research and realized it with JavaScript.</p>     
	            </section>
	            <figure className={'eleven columns ' + style.centercaption}>
	              <video id="video" className={'twelve columns'} src={animation} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 1. Intelligence Overview </figurecaption>
	            </figure>
	            <section className={'eight columns'}></section>
	            <section className={'eight columns'}>
	               <h5>Executive Summary</h5>
	               <p>After getting a sense of what the technology is about, users need to see the real proof of the security solution. First of all, a high level summary of the findings is provided, so that users could immediately know the overall number of requests and threats in their environments.</p>
	             </section>
	            <figure className={'eleven columns ' + style.centercaption}>
	              <video id="video" className={'twelve columns'} src={summary} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 2. Executive Summary </figurecaption>
	            </figure>
	            <section className={'eight columns'}></section>
	            <section className={'eight columns'}>
	               <h5>Significant Findings</h5>
	               <p>Users want to dive deeper into the types of network threats identified in their environment. With this bubble visualization, Users can get a good understanding of the scope and diversity of the threats. They can also interact with the bubbles to find details on demand. Usually outliers such as giant individual bubbles will catch eyes immediately and lead to further discussion.</p>
	               {/*
	               <blockquote>“I use this to capture the scope and breadth of what we found in the POV. I will focus on one or two “bubbles” or categories I know are important to the customers” -- A Customer Success Manager</blockquote>
	               <blockquote>“It helps us explain why we might think something (or know) something is malicious, based on the IP address or name server it is resolving to. I will often pivot into the product” -- A Sales Engineer</blockquote>*/}
		        </section>
		        <figure className={'eleven columns ' + style.centercaption}>
	              <video id="video" className={'twelve columns'} src={findings} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 3. Significant Findings </figurecaption>
	            </figure> 
	            <section className={'eight columns'}></section>
	            <section className={'eight columns'}>  
	          	  <h5>Threat Detail</h5>
	              <p>Users are particularly interested in ransomware, because they’ve suffered an attack in the past. They can firstly navigate to any threat family they are interested through the main navigation, and learn different aspects of the attacks. For example, the graph shown below was particularly polished for the data story: starting from any node in the network, we are able to mine deeper in the global security graph and unveil a full picture of the attack infrastructure.</p>
	            </section>
	            <figure className={'eleven columns ' + style.centercaption}>
	              <video id="video" className={'twelve columns'} src={infragraph} playsInline autoPlay="autoplay" loop> </video>
	              <figurecaption>Demo 4. Threat Detail </figurecaption>
	            </figure>
	            <section className={'eight columns'}></section>
	            <section className={'eight columns'}>
		         	<h4>Visual Design</h4>
		         	<p>I defined the style guide for the project. At the time the business unit was undergoing a rebrand. While there was no unified style guide, I constantly synced up with other designers and the creative director to make sure the design align with the basic brand requirements.</p>
		         	 <img alt="" src={visualguide}></img> 
		         </section>
		         {/*
		         <section className={'eight columns'}>
		         	<h4>Challenges</h4>
		         	<h5>Design visualization for unexpected data</h5>
		         	<p>Edge cases always exist in the real data, even after I spent time on studying the scale and the characteristics of the data. We hardly know how a future customer’s data looks like exactly. For example, the bubble chart went crazy a few times and the animations took minutes to complete because some attack outbreak on the network resulted in a huge amount of bubbles.</p>
		         	<h5>Automation V.S. Customization</h5>
		         	<p>In a survey we sent out later on for feedback, the topic <b>customization</b> came up frequently. We wanted to save people time by automating it as much as possible. Yet it’s difficult for the machine to always capture the best stories, which might otherwise be discovered by human. The more we automate, the more problems we will have with trust and control. </p>
		         </section>
		      */}
		      	 <section className={'eight columns'}></section>
		         <section className={'eight columns'}>
	          	  <h4>Measure Success</h4>
	              <p>After the alpha release, I’ve been collecting feedback and iterating with the developers. Later on I collaborated with a marketing project manager for conducting a survey to gather feedback from the field. I’ve also been monitoring the number of reports generated over time and customer engagement using google analytics:</p>
	            	<ul>
		              <li>2000+ reports have been delivered so far. Each eliminates half day of manual work.</li>
		              <li>More teams including customer success and world-wide sales partners have started using the tool to deliver value to customers.</li>
	              </ul>
	            </section>  
		         <section className={'eight columns'}>
		         	<h4>Takeaways</h4>
		         	<p><b>Balance between automation and control</b>: Like many other tech products, the more we automate, the more problems we will have with control and trust. This tool is built to save people time by automating manual tasks, yet it’s difficult for the machine to always capture the best stories, which might otherwise be discovered by an human. It’s a balancing act between automation and providing customization capability.</p>
		         	<p><b>Navigate design in organization</b>: It’s important to listen to different stakeholder perspectives and understand business needs, while keep driving focus on behalf of our users.</p>
		            <a target="_blank" href='https://medium.com/@chenye/storytelling-with-enterprise-data-8a508a8088df'><button className={style.reportbtn}>Read more about process on Medium</button></a>
		         </section>    

	        </div>
	        <PageNav nextPage='/Securitytool'/>
	        <Footer/>
      	</div>
    )
  }
}

export default Report;