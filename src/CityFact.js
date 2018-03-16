import React from 'react'
import style from './project.scss'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import { Link } from 'react-router'
import bg from '../assets/dataviz/bg.png'
import YouTube from 'react-youtube'
import factors  from '../assets/dataviz/datasets.png'
import persona  from '../assets/dataviz/persona.png'
import sketch  from '../assets/dataviz/sketch.png'
import prototype from '../assets/dataviz/prototype.png'
import wireframe  from '../assets/dataviz/wireframe.png'
import mindmap  from '../assets/dataviz/mindmap.jpg'
import rawdata  from '../assets/dataviz/data.png'
import round1 from '../assets/dataviz/round1.png'
import round2 from '../assets/dataviz/round2.png'
import layout from '../assets/dataviz/layout.png'
import bettergraph from '../assets/dataviz/bettergraph.png'
import usability from '../assets/dataviz/usertest.png'


const close = <svg fill="#1EAEDB" width="28" version="1.1" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 64 64" >
  <g> <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
  </g>
</svg>;

class FfRedesign extends React.Component {
  render() {
  	const opts = {
      height: '520',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 0
      }
    };
    return (
  		<div className={style.wrapper}>
        	<Link className={style.closebtn} to="/">{close}</Link>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '420px'}}>
			    <h1>City Facts</h1>
			    <p>How can we present complex government data to help people visualizing relocating factors?</p>
			</div>
			<div className={style.overview}>
				<section className={'eight columns'}>
	          	  <h4>Project Overview</h4>
	          	  <p>City Facts is an interactive visualization tool, which allow users to explore factors that affect living in different cities, such as <b>demographics, climate and economy</b>. All the data we provided in this tool comes from various government websites. It is built in Tableau.</p>
	          	  <h5>My Role</h5>
	              <p>During design phase I created wireframe and interactive prototypes for half of the graphs and I built the final dashboard tool with all the iterations. I collaborated with three other team members, and we shared all the tasks regarding user research, define problems and data preparation.</p>
		        </section> 
		    </div>
			<div className={style.content}>
		        <section className={'eight columns'}>
		          <h4>The Problem</h4>
	              <p>Open government data is invaluable due to its neutrality and comprehensiveness. However, it’s hard to work with and get the value out since the data usually sits in massive surveys and tables that are scattered over various government websites. Thus our initial goal is to help people make informed life decisions such as relocation by presenting government data in a consumable and useful way. We focused on the following design question:</p>
	               <p className={style.question}>How can we present complex government data to help people visualizing relocating factors?</p>
	          	  <h4>User Research</h4>
	              <p>Our team started with a mind mapping exercise to explore all the factors around living in a city. Then we conducted user interviews with seven participants to ask them what they care when they consider relocation and asked them to rank 8 common relocation factors. The top five relocation factors are: job opportunity, cost of living, environment, recreation, family-related.</p>
	              <img alt="" src={mindmap}></img> 
		          <figurecaption>Mindmap of relocation considerations</figurecaption>
		        </section>
		        <section className={'eight columns'}>
	          	  <h4>The Data</h4>
	              <p>This decision of focusing on government data brought us a few challenges. Firstly looking for data is an iterative process because we need to went back and forth between what was intended to be showed and what could possibly be obtained within the time limit. Eventually we collected a bunch of raw data to start with.</p>
	               <img alt="" src={factors}></img>
	               <figurecaption>Data from various government sites</figurecaption>
                   <p>Secondly, we had to deal with complex government spreadsheets with <b>inconsistent schema</b> and missing information, so we spent a lot of time filtering, cleaning and combining the spreadsheets to be consumable by Tableau.</p> 
                   <img alt="" src={rawdata}></img> 
                   <figurecaption>Raw spreadsheet downloaded from government site</figurecaption>
		        </section> 
		        {/*
	            <section className={'eight columns'}>
	          	  <h4>Persona</h4>
	          	  <p>Based on the qualitative data from user research, we created two personas for this tool.</p>   
	               <img alt="" src={persona}></img> 
	            </section> */}
	            <section className={'eight columns'}>
	               <h4>Sketching</h4>
                   <p>We listed all variables and relationships in the data collection, and started sketching different visualization ideas out on paper and whiteboard. Then  we gradually built out separate interactive prototypes with Tableau to start testing early ideas with people.</p>
                   <img alt="" src={sketch}></img> 
  				   <h4>Wireframe</h4>
  				   <p>Later on, we started to unify different pieces together, with linking and brushing technique applied. We tried different ways to construct the page such as using tabs to hold different chunks of data, or displaying all within one view, and we created wireframes and mockups for testing.</p>
	               <img alt="" src={wireframe}></img> 
		        </section> 
		        <section className={'eight columns'}>
		        	<p>You can play with the following two prototypes in Tableau!</p>
		        	<div>
		        		<button className={style.secondarybtn}><a href='https://public.tableau.com/profile/chenye#!/vizhome/Jobmarket/JobMarket'>Income by Industry</a></button>
                    	<button className={style.secondarybtn}><a href='https://public.tableau.com/profile/jt3577#!/vizhome/RatioOfSingleWomenToMen/Singlefemaletosinglemaleratio25-29yrs'>Demographics</a></button>
               		</div>
	               <img alt="" src={prototype}></img> 
		        </section> 
		         <section className={'eight columns'}>
		         	<h4>Usability Study</h4>
		         	<p>Two rounds of usability testing were permeated through the design process. The major usability issue was uncovered that is in the selection and navigation of the graphics. While we are limited by tableau functionalities, we didn’t make it clear which parts of the visualization were interactive, so users struggled in selecting content they were interested in, and struggled more in clearing their selections and filters.</p>
		         	<img alt="" src={usability}></img> 
		         	<h5>First Round Testing Results</h5>
		         	<img alt="" src={round1}></img> 
		         	<h5>Second Round Testing Results</h5>
		         	<img alt="" src={round2}></img> 
		         </section>
		          <section className={'eight columns'}>
		         	<h4>Iterations</h4>
		         	<p>Based on the usability feedback, we iterated several rounds on the final tool design.</p>
		         	<p>For the layout, we modified the structure to show hierarchy. We made it easier to start exploration especially for new viewers by adding explanations and the global filters at the top. Detailed instructions are provided for each graph to give a better guidance for users to navigate the layout with details-on-demand.</p>
		         	<img alt="" src={layout}></img> 
     	         	<p>For the graphics, we improved a few graph visual encoding to reveal the data insights better. We updated colors to associate a semantic meaning for each represented city, as well as to improve contrast value for readability purposes.</p>
		         	<img alt="" src={bettergraph}></img> 
		         	<h4>Final Product Demo</h4>
		         </section>    
		         <figure className={'eight columns'}>
		         	<YouTube videoId={'8NDJ0LB3HHg'} opts={opts}/>
		         	<p>Note: This is an interactive visualization. However the size of our data exceeded what Tableau can handle (more than 1,000,000 rows), it could not be published to Tableau Public. Feel free to contact me if you would like to run the tool with source file.</p>
		         </figure>    
	        </div>
	        <PageNav nextPage='/FfRedesign'/>
	        <Footer/>
      	</div>
    )
  }
}

export default FfRedesign;