import React from 'react'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import style from './project.scss'
import bg from '../assets/Wishlist/herobg.png'
import sketch from '../assets/Wishlist/sketches.png'
import wireframe from '../assets/Wishlist/wireframe.png'
import flow from '../assets/Wishlist/userflow.png'
import survey from '../assets/Wishlist/survey.png'
import context from '../assets/Wishlist/context.png'
import competitive from '../assets/Wishlist/competitive.png'
import persona from '../assets/Wishlist/persona.png'
import usability from '../assets/Wishlist/usability.png'
import mockup from '../assets/Wishlist/appmockup.png'

class Mobile extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <CloseNav/>
        <div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '450px'}}>
          <h1>Wishes Come True</h1>
          <p>How can we help college students understand the value of budget and support them to create and maintain a budget?</p>   
        </div> 
        <div className={style.overview}>
          <div className={'eight columns'}>
              <h4>Project Overview</h4>
              <p>Wishes come true is a mobile app that help students understand the value of maintaining a budget in a way that is not “heavy-handed” and perhaps enjoyable. The use of the wish-list concept allows it to express the value of budgeting in a way that is connected to the user’s wants and desires — which is very different from the unemotional process that a user would experience via a traditional budgeting app.</p>
              <h5>My Role</h5>
              <p>Within ten weeks, I worked with two other team members through the complete UCD process from user discover phase, to concept generation, prototyping and evaluation. This was a course project at the University of Washington.</p>
          </div>
        </div>
        <div className={style.content}>
          <section className={'eight columns'}>
              <h4>Research</h4>
              <p>We started with this design question: how can we help college students create and stay within a budget? To understand our targeting users, we utilized different user research methodologies including competitive analysis, survey, context inquiry and interview, with participants mainly from the University of Washington.</p>
          </section>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
               <img className={style.embedimg} alt="" src={survey}></img> 
            </figure>
            <div className={'five columns ' + style.side }>
                <h5>Survey</h5>
                <p>It provided us an opportunity to reach a wide audience quickly and retrieve a large number of responses. We learned about students' sources of income, whether and how they currently manage budget and the tools they normally use.</p>
            </div>
          </section>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
               <img className={style.embedimg} alt="" src={context}></img> 
            </figure>
            <div className={'five columns ' + style.side }>
                <h5>Contextual Inquiry</h5>
                <p>This method gave us a much stronger picture as to who our audience is, what are their true struggles when it comes to budgeting, and how they might be addressing those struggles (either successfully or not successfully) today. One key insight derived here was that roommates often share expenses and monetary resources.</p>
            </div>
          </section>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
               <img className={style.embedimg} alt="" src={competitive}></img> 
            </figure>
            <div className={'five columns ' + style.side }>
                <h5>Competitive Analysis</h5>
                <p>We looked into top ranked budgeting apps on Google Play and Apple Store, and we learned that people have basic expectations when it comes to a mobile application such as cloud synchronization, managing group finance as well as proper reporting and reminders.</p>
            </div>
          </section>

          <section className={'eight columns'}>
            <p>We examined results from all the research together, we derived a list of key findings, identified main user stories and further created three personas. The key findings are:
              <ul>
                <li>Everyone who reported that they maintain a budget noted that they have <b>ran over</b> budget.</li>
                <li>Most participants not budgeting, because they were not sure <b>how to</b> create it, and considered it time-consuming.</li>
                <li>Co-budgeting is a need(e.g., roommates and friends)</li>
              </ul>
            </p>
            <h4>Persona</h4>
            <img className={style.shadow} alt="" src={persona}></img> 
          </section>
          <section className={'eight columns'}>
              <h4>Ideation</h4>
              <p>We started with individual ideation first, and brainstormed over 30 ideas delivered via quick sketches. Then we examined all the sketches together using affinity diagramming, from which we selected three promising ideas to further explore and focus on.</p>
              <img className={style.embedimg} alt="" src={sketch}></img>
              <p>We came to notice that all of us three have some ideas around the motivation for students to create a budget. After reviewing research and personas, one of my ideas based on the concept of a <b>wishlist</b> was selected by the team to focus efforts on. This idea focuses on motivating students to create and maintain a budget plan.</p>
          </section>
          <section className={'eight columns'}>    
              <h4>Wireframe</h4> 
              <p>Based on the concept of wishlist, we sketched out the user task flow, basic UI components and interactions on the whiteboard. Then we started prototyping in Axure, gradually from low-fidelity to higher fidelity prototype. You can play with the <a href="https://90cg1g.axshare.com/#p=task_1_-_sign_up_and_create">interactive prototype</a>. We focused on refining the interaction of four core user scenarios we want to test with users:</p> 
              <ul className={style.compactlist}>
                <li>Create a wishlist</li>
                <li>Add an expense manually</li>
                <li>View the progress of wishlist</li>
                <li>View and edit a budget after using for a certain time period</li>
              </ul>
          </section>
            <figure className={'ten columns'}>
               <img className={style.embedimg} alt="" src={wireframe}></img> 
            </figure>
          <section className={'eight columns'}>    
              <h4>Usability Testing</h4> 
              <p>We conducted usability testing with 6 participants with our high-fidelity prototype in Axure, obtained a total of 17 key findings, including 3 high severity usability issues.</p>
              <img className={style.embedimg} alt="" src={usability}></img> 
              <p>The creation of a prototype, and the successive usability testing that was conducted using this prototype, has proven to be invaluable for revealing key usability concerns as well as for identifying concepts or interactions that were effective or considered beneficial by participants. We redesigned the prototype based on usability testing, also improved visual design.</p>
          <h4>Final App Mockups</h4> 
          </section>
          <section className={'eleven columns'}>    
            <img alt="" src={mockup}></img>      
          </section>
        </div>
        <PageNav nextPage='/CandyBowl'/>
        <Footer/>
      </div>
    )
  }
}

export default Mobile;