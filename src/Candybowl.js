import React from 'react'
import CloseNav from './CloseNav.js'
import YouTube from 'react-youtube'
import Footer from './Footer.js'
import PageNav from './PageNav.js'
import style from './project.scss'
import bg from '../assets/CandyBowl/herobg.png'
import usability from '../assets/CandyBowl/evaluation.jpg'
import insight from '../assets/CandyBowl/insights.png'
import ideation from '../assets/CandyBowl/brainstorm.png'
import ideas from '../assets/CandyBowl/ideas.png'
import prototype1 from '../assets/CandyBowl/prototype1.png'
import final from '../assets/CandyBowl/final.png'
import img7 from '../assets/CandyBowl/gameflow.png'
import img8 from '../assets/CandyBowl/eesystem.png'
import feature1 from '../assets/CandyBowl/feature1.png'
import feature2 from '../assets/CandyBowl/feature2.png'
import feature3 from '../assets/CandyBowl/feature3.png'


class CandyBowl extends React.Component {
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
        <CloseNav/>
        <div className={style.titlesection} style={{backgroundImage: 'url(' + bg + ')', height: '486px'}}>
          <h1>Reimagine the Candy Bowl Experience</h1>
          <p>Have you ever thought about how a candy bowl changes the environment it’s in?</p>   
        </div> 
        <div className={style.overview}>
          <div className={'eight columns'}>
              <h4>Project Overview</h4>
              <h5>The Result</h5>
              <p>We created Sweet Treat, a candy machine that, is sustainable in the variety of candy it provides, automatically refills itself, and promotes positive social interactions surrounding it in the office.</p>
              <h5>My Role</h5>
              <p>As a design technologist, I worked through consolidating user research findings into various design concepts, to the two prototype iterations with two other team members. I mainly designed the digital experience and developed the interface including the challenges, and contributed most to the electronic prototyping.</p>
            <h5>Final Video</h5>
            <YouTube videoId={'pVqJyA2r7JU'} opts={opts}/>
         </div>
        </div>
        <div>
        </div>
        {/*}
        <div className={style.summary}>
          <div className={'ten columns'}>
            <div className={'five columns offset-by-one'}>
              <h4>My Role</h4>
              <p>As a design technologist, I worked with two other members through consolidating user research findings into various design concepts, to two iterations of the prototype. I mainly designed the digital experience and developed the interface including the challenges, and contributed most to the electronic prototyping.</p>
            </div>
            <div className={'five columns offset-by-one'}>
              <h4>Result</h4>
              <p>Over ten weeks, our team created Sweet Treat, the reimagined candy bowl experience, to make the bowl easier to refill, increase the variety of candy in the bowl at any given time, and increase engagement in the office surrounding it.</p>
            </div>
          </div>
        </div> */}
        <div className={style.content}>
          <section className={'eight columns'}>
              <h6>Discover</h6>
              <h4>The Problem</h4>
              <p>The current problem stated by the department office staff is that, even though a wide variety of candy is available, visitors to the candy bowl tend to select only specific types of candy, causing it to run out more quickly and leaving less variety for later visitors. This happens because the candy taker’s behavior is motivated by sensation, which drives them to select what they perceive to be the best-tasting candy. The candy bowl is also a hassle to refill, leaving the candy bowl manger to believe it should be maintained by everyone in the office. </p>
              <h4>What happens around a candy bowl?</h4>
              <p>We took this as an opportunity to study around a artifact that people take for granted. We started with a literature review to gain an understanding of the psychology around changing people’s behavior and to learn about <span className={style.emp}>gamification</span>. We interviewed candy bowl managers(a title we made up for easy reference) to better understand problems that surround the candy bowl in the department. </p>
              <p>With the information we gathered, we conducted affinity diagraming and drew out three common themes alongside key insights that drove our design efforts.</p>
          </section>
          <img className={style.embedimg} alt="" src={insight}></img> 
          <section className={'eight columns'}>
              <h4>Ideation</h4>
              <p>Thinking out of screen and ideating around a solution with physical form opened up our imagination. I had one of the most fun brainstorming sessions: We came up with a wide variety of systems that could meet the needs we uncovered. However, being aware of the upcoming workload of prototyping, the ideas were narrowed down to a single physical form with three possible digital interactions.</p>
              <p>Finally, the ideas were narrowed down to a single physical form with 3 possible digital interactions.</p>
          </section>
          <figure className={'ten columns'}>
              <img alt="" src={ideation}></img>
              <figurecaption>Figure. Group ideation session</figurecaption>
          </figure>
          <figure className={'ten columns'}>
              <img alt="" src={ideas}></img>
              <figurecaption>Sketch</figurecaption>
          </figure>
          <section className={'eight columns'}>   
              <h6>First Iteration</h6>   
              <h4>Prototyping</h4> 
              <p>We decided to go with cardboard for first iteration. As for the on-screen part, I built a website to host the challenges, to be displayed in a smartphone. </p>
          </section>
          <figure className={'eight columns'}>
              <img className={style.embedimg} alt="" src={prototype1}></img> 
          </figure>
          <section className={'eight columns'}>    
              <h4>Evaluation</h4> 
              <p>In order to evaluate our initial prototype, we conducted a round of usability testing. Our main goal was to gather feedback on the 3 potential digital challenges and the overall physical design. The prototype was placed at the rest area of our department building, where students, staff, and faculty would pass by.</p>
              <p>Ultimately, we had 7 participants complete our study, and we uncovered a variety of information. Unfortunately, we did not have enough participants complete the survey for each challenge to make the data generalizable, so our findings primarily came from the comments made by participants as they interacted with the prototype.</p>
          </section>
          <figure className={'eight columns'}>
              <img className={style.embedimg} alt="" src={usability}></img> 
          </figure>
          <section className={'eight columns'}>    
              <h4>The Final Prototype</h4> 
              <p>As a result of the findings from our testing, we made modifications to the design of both the physical and digital parts of the prototype. We then incorporated those changes into a final prototype, which was built from significantly higher quality materials than the first prototype. We primarily used laser cutting on acrylic sheets and birch boards for all of the components. The final prototype is a complete system with three individual parts: the physical design, the electronics system design, and the digital interaction design. </p>
              <h5>The Physical Form</h5>
          </section>
          <img alt="" src={final}></img> 
          <section className={'eight columns'}>
              <h5>The Electronic System</h5>
              <p>We designed and implemented a control system that would run the mechanics of the prototype. The core controller is Arduino Uno, which talks to different sensors and modules. The components work together as the following chart shows. </p>
              <img alt="" src={img8}></img>
              <h5>The Digital Interaction</h5>
              <p>Digital Interaction of Sweet Treat primarily includes the challenges that users must complete in order to earn higher quality candies. Compared with the user flow we designed, we decided to only provide the user one challenge at a time, so the user isn't be able to pick between different challenges. Instead, the challenge will rotate every week, which helps keep the experience fresh for an extended amount of time.</p>
              <img alt="" src={img7}></img>
          </section>
          <section className={'eight columns'}>  
           
          </section>
          <h2>Introducing...Sweet Treat</h2>
          <h5>Key Feature 1: Interactive Challenge</h5>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
              <img className={style.shadow} alt="" src={feature1}></img> 
              <figurecaption>A teacher plays with Sweet Treat for candy on showcase day</figurecaption>
            </figure>
            <div className={'six columns ' + style.side} >
              <p>In order to make candy consumption sustainable, we needed to limit the user’s access to the better candy. We designed the digital challenge for which users must complete in order to earn the better candy reward. To encourage them to play the challenge,  we‘ve made the drawer containing the better candy transparent.</p>
            </div>
          </section> 
          <h5>Key Feature 2: Grab & Go</h5>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
              <img className={style.shadow} alt="" src={feature2}></img> 
              <figurecaption>A student gets a candy from Grab & Go tray</figurecaption>
            </figure>
            <div className={'six columns ' + style.side}>
              <p>Considering those who just need a quick fix, we designed a tray at the top of the machine where users can grab a piece of candy without completing a challenge. This section will initially be filled with less desirable and cheaper candy than the candy in the drawer, but can be added to by users who want to share extra candy they earned by playing games, as encouraged by prompts on the screen.</p>
            </div>
          </section>
          <h5>Key Feature 3: Autofilling</h5>
          <section className={'ten columns ' + style.center}>
            <figure className={'seven columns'}>
              <img className={style.shadow} alt="" src={feature3}></img> 
              <figurecaption>The detail view of the drawer filled with candy</figurecaption>
            </figure>
            <div className={'six columns ' + style.side}>
              <p>The refilling drum, which is divided into 4 sections, is the main candy storage. It can refill the drawer 4 times by rotating itself, as soon as the IR sensors detects the drawer is almost empty. We designed this because one of the problems stated was that refilling the candy bowl is a hassle. So, we designed Sweet Treat to have a large candy storage and the ability to refill itself, which reduces the frequency of refilling.</p>
            </div>
          </section> 
          {/*
          <section className={'six columns ' + style.center}>
            <button className={style.actionbtn}><a href='https://www.hcde.washington.edu/files/imgs/capstone/2016/MS-capstone-sweet-treat.pdf'>View Poster</a></button>
            <button className={style.actionbtn}><a href='https://youtu.be/P3kTBk0FmaE'>Watch How We Made It</a></button>
          </section>   */}            
        </div>
        <PageNav nextPage='/ThreejsExp'/>
        <Footer/>
      </div>
    )
  }
}

export default CandyBowl;