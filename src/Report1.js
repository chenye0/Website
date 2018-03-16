import React from 'react'
import style from './project.scss'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import { Link } from 'react-router'
import bg from '../assets/Report/bg_dark.png'
import prob1  from '../assets/Report/prob1.png'
import prob2  from '../assets/Report/prob2.png'
// import prob3  from '../assets/Report/prob3.png'
import data  from '../assets/Report/DataNarrative.png'
import graph  from '../assets/Report/graph.png'
import evolution  from '../assets/Report/evolution1.png'
import bubble  from '../assets/Report/bubblechart.png'
import animation from '../assets/Report/animation.mp4'
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
			    <h1>Umbrella Security Report</h1>
			    <p>How might we help customers uncover their network threats and understand the value of our product?</p>
			</div>
			<div className={style.overview}>
				<section className={'eight columns'}>
	          	  <h4>Project Overview</h4>
	          	  <p>Umbrella Security Report is an interactive web application for helping customers uncover their network threats, and understand how Umbrella can protect them. It turns complex security data into concrete and understandable data visualizations.</p>
	          	  <h5>My Role</h5>
	              <p>I am the only designer working through the project since the initial kickoff meeting. I worked with a front-end engineer and a back-end engineer.</p>
	              <p>I was responsible for all the design executions and validations. I presented works to gain buy-in from executives and other teams for feedback. I built prototypes for some animations and interactions using JavaScript and CSS.</p>
	              {/*
		          <p>How might we help our customers understand security data better and prove business value?</p>
	              <p>After the initial launch, more teams started to get involved. Since then I collaborated with a marketing project manager and a video specialist to deliver some of the content and conduct a usage analysis. Meanwhile more changes on the technical side were taking place to adapt to the high volume of usage.</p>*/}
	              <h5>The Impact</h5>
                   <p>In Nov 2016, four months after project kickoff, we shipped the alpha version internally, and have been delivering improvements. In March 2017, we released the tool to broader Cisco including worldwide partners. The results have exceeded our expectations so far:</p>
	              <ul className={style.highlight}>
		              <li> Automating each report eliminates half day of manual work for internal customer-facing teams. </li>
		              <li> 1500+ reports have been delivered to customers.</li>
		              <li> Currently about 40 reports are being generated per week, and the number grows constantly.</li>
	              </ul>
		        </section> 
		    </div>
			<div className={style.content}>
		        <section className={'eight columns'}>
	          	  <h4>The Problem</h4>
	              <p>At Cisco Umbrella, sales engineers build threat reports to fully assess a prospect's network security condition and help them uncover and understand the threats they are encountering. The process demonstrates the efficacy of our security solution, and this proof of value (POV) is critical to business success. </p>
	              <p>They used to create these reports manually, which normally take half day to pull information out of dashboard, look into top security incidents, take screenshots across multiple sources and put together the slides. Since it requires certain knowledge about cyber security and the trending attack campaigns, sometimes a security analyst from the research team will help out as well. There were some problems with this process:</p>
		        </section> 
		        <section className={'eight columns'}>
		        	<ul className={style.illustration}>
		              <li className={'four columns'}> <img alt="" src={prob1}></img><h6>Munual Work</h6> Manual work is time-consuming and prone to errors.</li>
		              <li className={'four columns'}> <img alt="" src={prob2}></img><h6>Hidden insights</h6>Data insights and value are buried in text heavy slides.</li>
		           </ul>
		        </section>
		         <section className={'eight columns'}>
	          	  <h4>Opportunity & Goals</h4>
	              <p>One among the few initial proposals was just to make a better python script for them to pull the data from API, or to automatically generate some line charts and bar charts. However, we saw an opportunity to come up with a completely new way to create and present the report. We aim for not only saving up more time for sales engineers, but also bringing greater customer engagement and recognition. At the early stage, our team decided to focus on the following goals:</p>
	               <ul>
		              <li>Automate the report generating process and minimize manual input.</li>
		              <li>Reveal data insights and tell security stories with better data representation.</li>
		           </ul>
		        </section> 
		        <section className={'eight columns'}>
	          	  <h4>User Research Insights</h4>
	          	  <p>The initial stakeholder meeting setup was simple: me the designer, with an engineer manager and two sale engineers. They walked us through their current process of creating and demoing a threat report. Then we reviewed a few current reports to understand what’s effective and what's  not.</p>
	          	  <h5>The Context. The Audience. The Best Story</h5>
	              <p>The end audience can be our prospect or customer, whom the sales engineers communicate with all the time. During the research phase I focused on figuring out with the sales engineers: the data that catch their attention the most, the type of stories that resonate with the audience the best, and the information we want to highlight such as our value proposition.</p>
	              <h5>Dive into the Data</h5>
                  <p>The purpose of the tool is to help people tell stories with data, therefore understanding the real data and the insights it brings is key. My internship in the security research team has built me a good knowledge of security foundation and DNS data. Customer specific data is also involved, which I took some time to dive into and tinker around via a few raw sample datasets. It helped me understand better the meaning, the scope and relationships within the data.</p>
		        </section> 
		        <section className={'eight columns'}>
		          <h6>The Process</h6>
	          	  <h4>Construct the Flow and Hierarchy</h4>
	              <p>Every presentation is storytelling. The challenge is to structure the report as a complete story at a high level, while properly hide the details only to be revealed when requested (e.g. when the audience interrupt and get intrigued by specific piece of the story). With the information I gathered from the research, I started with constructing the flow by writing the narratives, putting myself as a sale engineer talking with customers, meanwhile mapping the data to the flow. At this point, ideas spring up too.</p>
	               <img alt="" src={data}></img> 
	               <h4>Ideation & Feedback Loop</h4>
                   <p>I started sketching idea on papers with the above flow. At first I didn’t constrain myself with any technologies, so crazy ideas came up, such as telling the story with presenting and manipulating 3D graph. After a few sync up  with the engineers, we narrowed down to one idea that we all agreed upon as a great fit for a MVP, which would achieve our goals fast with the least amount of dev work.</p>
                   <p>Being able to involve the sales engineers from the beginning really helped keeping this project fast and on track. Soon after I came up with the first wireframe, I presented the design during the SE weekly all-hands. Then based on their feedback, I went back to iterate on my design.</p>
		        </section>   
		        <section className={'eight columns'}>
	          	  <h4>Detailed Design</h4>
	          	  <h5>Visual Storytelling</h5>
	          	  <p>As a web app, it is more capable to use visual content for storytelling, which brings greater engagement with the audience. I designed a short series of animating graphs to illustrate the intelligence and the value of our security research and realized it with javascript.</p>   
	              <video id="video" className={'twelve columns'} src={animation} playsInline autoPlay="autoplay" loop> </video>
	            </section>
	            <section className={'eight columns'}>
	               <h5>The Success of Bubbles</h5>
	               <p>The packed bubble visualization has proven its value. With these packed bubble groups, the audience gets a quick overview first. They can interact with the bubbles to dig deeper for more detail. Usually outliers such as bigger group or giant individual bubbles will catch eyes immediately and lead to further discussions and engagement. Moreover, being able to switch to a timeline view allows them to learn how bubbles(events) spread over time.</p>
	               <p>Yet for this particular view, quite a few problems came up with the original design when we started to pour real datasets into the tool, which will be described in detail in the challenge section.</p>
	               <blockquote>“I use this to capture the scope and breadth of what we found in the POV. I will focus on one or two “bubbles” or categories I know are important to the customers” -- A Customer Success Manager</blockquote>
	                <video id="video" className={'twelve columns'} src={findings} playsInline autoPlay="autoplay" loop> </video>
		        </section> 
	            <section className={'eight columns'}>  
	          	  <h5>Unveil the Infrastructure </h5>
	              <p>This slightly different layout was particularly polished for our data and story: we want to demonstrate that starting from any node in a network, we were able to mine deeper in the our security graph  and unveil a full picture of the attack infrastructure.</p>
	              <blockquote>“It helps us explain why we might think something (or know) something is malicious, based of the IP address or name server it is resolving to. I will often pivot into Investigate from here.” -- A Sales Engineer</blockquote>
	              <video id="video" className={'twelve columns'} src={infragraph} playsInline autoPlay="autoplay" loop> </video>
	            </section>

	            <section className={'eight columns'}>
	               <h5>Study the Evolution</h5>
                   <p>Designing with time series data including discrete events is challenging, especially when the viewers need to investigate the time series for multiple incidents. I designed a group timeline for time-to-event data, which was also linked with line charts for continuous time series data, so to make it easier for identifying patterns as well as spotting outliers.</p>
                   <img alt="" src={evolution}></img> 
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
	              <p>In Nov 2016, four months after the project kickoff, we shipped alpha version internally. Since then, sales engineers and customer success team started trying it out, and now they use it in their daily work.</p>
	              <p>In March 2017, it was released to broader Cisco including partners around the world. Meanwhile, <a href='https://learn-umbrella.cisco.com/solution-briefs/umbrella-security-report'>a marketing solution brief</a> has been published.</p>
	              <p>The project is successfully built from a culture around shipping fast and deploying constantly. It started off as an experiment and was first shipped within only four months. Yet the results have exceeded our expectations and definitely proved its value.</p>
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