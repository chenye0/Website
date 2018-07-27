import React from 'react'
import CloseNav from './CloseNav.js'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import style from './project.scss'
import bg from '../assets/Wishlist/herobg.png'
import sketch from '../assets/Wishlist/sketch.png'
import wireframe from '../assets/Wishlist/wireframe.png'
import flow from '../assets/Wishlist/userflow.png'
import survey from '../assets/Wishlist/survey.png'
import context from '../assets/Wishlist/context1.png'
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
               <img className={style.shadow} alt="" src={context}></img> 
            </figure>
            <div className={'five columns ' + style.side }>
                <h5>Contextual Inquiry</h5>
                <p>This research gave us a much stronger picture as to who our audience is, what are their true struggles when it comes to budgeting, and how they are addressing those struggles (either successfully or not successfully) today. For instance, one participant showed us the actual spreadsheet he uses for budget.</p>
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
            <h4>Key Findings </h4>
            <ul>
              <li>Everyone who reported that they maintain a budget noted that they have <b>ran over</b> budget.</li>
              <li>Most participants not budgeting, because they were not sure <b>how to</b> create it, and considered it time-consuming.</li>
              <li>Co-budgeting is a need(e.g., roommates and friends)</li>
            </ul>
          </section>
          <figure className={'eight columns'}>
            <h4>Persona</h4>
             <img className={style.shadow} alt="" src={persona}></img> 
          </figure>
          <section className={'eight columns'}>
              <h4>Ideation</h4>
              <p>We started with individual ideation first, and brainstormed over 30 ideas delivered via quick sketches. Then we examined all the sketches together using affinity diagramming, from which we selected three promising ideas to further explore and focus on.</p>
          </section>
          <section className={'eleven columns ' + style.center}>
            <figure className={'seven columns'}>
               <img className={style.shadow} alt="" src={sketch}></img> 
            </figure>
            <div className={'six columns ' + style.side }>
                <h5>How might we...</h5> 
                <p>
                <ul>   
                  <li>motivate students to create and stay on budget?</li>
                  <li>help students track budget in a hassle-free way?</li>
                </ul>
                </p>
                <h5>Idea</h5>
                <p>We decided to explore the concept of a <b>wishlist</b> and focus on:
                <ul>   
                  <li>motivate the user in a way that is connected to their desires</li>
                  <li>guide users through creating a budget</li>
                  <li>track budget progress automatically</li>
                </ul>
                </p>

            </div>
          </section>
          <section className={'eight columns'}>
              <h4>User Flow</h4>
              <img className={style.embedimg} alt="" src={flow}></img>
          </section>
          <section className={'eight columns'}>    
              <h4>Wireframe</h4> 
              <p>Based on the concept of wishlist, we sketched out the user task flow, basic UI components and interactions on the whiteboard. Then we started prototyping in Axure, gradually from low-fidelity to higher fidelity prototype. We focused on refining the experience of four core user scenarios we want to test with users:</p> 
              <ul className={style.compactlist}>
                <li>Create a wishlist</li>
                <li>Add an expense manually</li>
                <li>View the progress of wishlist</li>
                <li>View and edit a budget after using for a certain time period</li>
              </ul>
          </section>
            <figure className={'twelve columns'}>
               <img className={style.embedimg} alt="" src={wireframe}></img> 
            </figure>
          <section className={'eight columns'}>    
              <h4>Usability Testing</h4> 
              <p>We conducted usability testing with 6 participants with our high-fidelity prototype in Axure, obtained a total of 17 key findings, including 3 high severity usability issues.</p>
              <img className={style.embedimg} alt="" src={usability}></img> 
              <p>The creation of a prototype, and the successive usability testing that was conducted using this prototype, has proven to be invaluable for revealing key usability concerns as well as for identifying concepts or interactions that were effective or considered beneficial by participants. We redesigned the prototype based on usability testing, also improved visual design.</p>    
          </section>
          <h3>Final App Mockups</h3> 
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