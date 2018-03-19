import React from 'react'
import style from './project.scss'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import bg from '../assets/FarmerFrog/herobg.png'
import heuristic from '../assets/FarmerFrog/heuristics.png'
import goals from '../assets/FarmerFrog/businessgoal.png'
import user from '../assets/FarmerFrog/research.png'
import cardsort from '../assets/FarmerFrog/cardsorting.png'
import persona from '../assets/FarmerFrog/persona.png'
import imgIA from '../assets/FarmerFrog/IA.png'
import design from '../assets/FarmerFrog/wireframe.png'
import usability from '../assets/FarmerFrog/usability.png'
import video1 from '../assets/FarmerFrog/test.mp4'
import homepage from '../assets/FarmerFrog/homepage.png'
import school from '../assets/FarmerFrog/schoolpage.png'
import blog from '../assets/FarmerFrog/blogpage.png'

class FfRedesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }
  componentWillMount(){
    this.setState({height: window.innerWidth});
  }
  render() {
    return (
  		<div className={style.wrapper}>
        	<CloseNav/>
			<div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '520px'}}>	
				<h1>FarmerFrog Website Design</h1>
			    <p>A website redesign for Farmer Frog, a non-profit organization that teaches children and families grow food.</p>
			</div>  
			<div className={style.overview}>
				<div className={'eight columns'}>
	        	<h4>Project Overview</h4>
              	<h5>The Result</h5>
	            <p>Over ten weeks, we delivered a website redesign, with 90% fewer navigation content resulted from information architecture recreation, iterated through 3 field usability testing, that impressed both users and stakeholders. The client has adopted most of our design during their website revamp: Meet the <a href="http://farmerfrog.org/">new frog here.</a></p>
	          	<h5>My Role</h5>
	            <p>I worked through user research to prototyping with team members, including interviews, card sorting exercise, IA recreation and paper prototyping. I created comparative wireframes in Axure for first round of testing and then completed field usability testing with another researcher.</p>
		        </div>
	        </div>
			<div className={style.content}>
	            <section className={'eight columns'}>
	          	  <h4>The Problem</h4>
	              <p>Farmer Frog carries a great mission of supporting communities by empowering people to grow their own food. While the organization and programs keeps growing, their website is getting out of control over time. After a heuristic evaluation of the website, we figured out the main issues as following:</p>
		          <ul>
		              <li>Information overload with a lot of site content</li>
		              <li>Site content organized in organizational-centric view rather than user-centric view</li>
		              <li>Lack of organization leads to misplacement of additional content</li>
		              <li>Outgrowing existing Wordpress template.</li>
		          </ul> 
		        </section>
		        <figure className={'eight columns'}>
		          <img alt="" src={heuristic}></img> 
		          <figurecaption>Old FarmerFrog website home page, with three-level drop down menu.</figurecaption>
		        </figure>
		        <section className={'eight columns'}>
		          <h6>The Discovery</h6>
	              <h4>Business Goals</h4>
	              <p>We met with our stakeholders to better understand their business. They didn’t have a specific goal in mind for this particular redesign. However after a few further conversations with the stakeholders, we identified their primary business goals.</p>
	            </section> 
	            <figure className={'eight columns'}>
	              <img alt="" src={goals}></img> 
	            </figure>
	            <section className={'eight columns'}>
	              <h4>User Research Insights</h4>
	              <p>We conducted 5 interviews with users in different relationships with Farmer Frog and also sent out a survey through the mailing list provided by Farmer Frog. After consolidating the results, we figured out there are five types of website users, and then we listed out all of the user needs and grouped them by topics.</p>
	            </section>
	            <figure className={'eight columns'}>
	              <img className={style.embedimg} alt="" src={user}></img> 
	            </figure>
	            <section className={'eight columns'}>
	              <h4>Persona Creation</h4>
	              <p>Our researched revealed five types of users alongside lots of tasks the website need to support. While every user seems critical to the organization, from the school teacher, to the volunteers, we needed to prioritize the user the website would be focusing on supporting.</p>
	              <p>The business goals defined earlier helped build a clear picture and weigh different user types. We figured  the teacher Tommy would be the primary persona, whose main goals are to learn about starting a new school garden and showcase her/his school garden’s achievements, which aligned the goal of growing more gardens and highlight achievements. The other main personas are the parent and the grantor.</p>
	            </section>
	            <figure>
	              <img className={style.embedimg} alt="" src={persona}></img> 
	            </figure>
	            <section className={'eight columns'}>
	              <h6>The Approach</h6>
	              <h4>Task Matrix & Card Sorting</h4>
	              <p>We created a persona-based task matrix that helped us understand the frequency of different tasks. We then transferred the task list into a open card sorting exercise, with an online software <span className={style.emp}>OptimalSort</span>. In our setting the users can create categories and drag the cards they see fit into that category.</p>
                  <p>This was a critical step in the redesign. By laying out the groups of cards participants put together, we understand what content they see as related, as well as what terms they would recognize and use. For instance, multiple users sorted cards within Education V.S. community, which ended up being two items in main nav. It wasn’t as easy to align all the other categories, since they varied a lot across different participants. There was one interesting finding, where a user apparently created a category with 24 cards and named it “Delete these items”. </p>
	            </section>  
	            <figure className={'eight columns'}>
	              <img className={style.embedimg} alt="" src={cardsort}></img> 
	            </figure>
	            <section className={'eight columns'}>
                  <p>After spending much time on affinity diagramming and going back to the original research data points, we came up with the new information architecture of the site.</p>
                </section> 
	              <img className={style.embedimg} alt="" src={imgIA}></img> 
	            <section className={'eight columns'}>   
 	                <h6>The Design Process</h6>
 	                <h4>The Structure & Flow</h4>
 	                <p>With the redesigned IA, we were able to define the main navigation of the website. Soon we started sketching and storyboarding on the whiteboard. We generated ideas for UI components, interactions and the flow between pages. Each of us then created paper prototypes for team review.</p>
	 	            <figure>
	 	              <img alt="" src={design}></img>
		            </figure>
 	            </section>
 	            <section className={'eight columns'}> 
 	              <p>I then transferred the idea into a clickable wireframe using Axure, which was later used in five usability testing sessions with our classmates. Based on the feedback, we made changes to the wireframe, and soon started build out the high fidelity prototype.</p>
  	              <video id="video" className={'twelve columns'} src={video1} autoPlay='autoplay' playsInline loop> </video>
 	            </section>
 	            <section className={'eight columns'}>
	              <h4>Field Usability Testing</h4> 
	              <p>I paired with another member for the final round of usability testing for iteration. We went to visit three users of FF site, two are teachers from a partner school of FarmerFrog and one is their volunteer. Generally they really loved the new design. There were a few issues such as, the teacher had difficulty finding the school photos and testimonials. Thus we figured out a easy way by just changing the button to be more explicit, and also added testimonial on home page. </p>
	              <figure>
	              	<img alt="" src={usability}></img> 
	           	  </figure>
	            </section>  
	            <h1>Introducing...New Frog</h1> 
	  	        <button className={style.actionbtn}><a href='http://jasmartgithub.github.io/farmerfrog/#'>View final design</a></button>
		        <section className={'ten columns ' + style.center}>
		            <figure className={'eight columns'}>
		              <img className={style.shadow} alt="" src={homepage}></img> 
		            </figure>
		            <div className={'five columns ' + style.side}>
		              <h5>Homepage</h5>
		              <p>The home page has been designed to allow user get a quick glance of what farmer frog does with big banner and testimonial, followed by three main groups with actionable items, worded in verb to match users’ search metal model. The redesigned nav contains 90% fewer navigation options.</p>
		  	        </div>
	            </section>  
		        <section className={'ten columns ' + style.center}>
	            <figure className={'eight columns'}>
	              <img className={style.shadow} alt="" src={school}></img> 
	            </figure>
	            <div className={'five columns ' + style.side}>
	           	  <h5>In School Page</h5>
	              <p>The teacher, our primary persona will get what they need from In-schools pages. The page is prioritized by the teacher’s major tasks, learning how to start a garden, checking and sharing photos of their own school gardens, and looking into other education relate programs their school could introduce.</p>
	  	        </div>
	           </section>   
		        <section className={'ten columns ' + style.center}>
	            <figure className={'eight columns'}>
	              <img className={style.shadow} alt="" src={blog}></img> 
	            </figure>
	            <div className={'five columns ' + style.side}>
	           	  <h5>Frog Blog</h5>
	              <p>We addressed the problem of having dynamic and complex content, by introducing a new blog template to hold all information related to events, garden activities and all these other  programs. The tags and dates filters makes it easier for teachers and parents to check the kids’ photos and upcoming events.</p>
	  	        </div>
	            </section> 
	  	        {/*}
	            <section className={'eight columns'}>
	              <h4>Hand-off</h4> 
	              <p>At the end of this ten-week project, we handed over all of our research outcome and a hi-fi website with templates for main pages to our client. With the refreshed look and positive feedback received during the redesign, our client was happy to implement it. </p>
	              <p>After almost one year, I am so proud and excited to see that they finally revamped their website, with most of the redesign we’ve done.</p>
	            </section> 
	          */}
	            <section className={'eight columns'}>
		            <h4>What I've learned</h4> 
					<p> It's important to understand end user needs as well as business goals. We design to solve real people problem, and to help business succeed.</p>
					<p> UX design is balancing act between choosing a right mix of UX methods to get the most out of your users and real world constraints such as time and money.</p>
				</section>
	        </div>
	        <PageNav nextPage='/Wish'/>
	        <Footer/>
      	</div>
    )
  }
}

export default FfRedesign;