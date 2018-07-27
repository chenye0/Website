import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer.js'
import security from '../assets/thumbnail2/security.png'
import report from '../assets/thumbnail2/report.png'
import img2 from '../assets/thumbnail2/candybowl1.png'
import img3 from '../assets/thumbnail/island.png'
import img4 from '../assets/thumbnail2/ff.png'
import viz from '../assets/thumbnail2/evolution.png'
import cityfact from '../assets/thumbnail2/cityfact.png'
import wish from '../assets/thumbnail2/wishlist.png'
import style from './home.scss'

class Home extends React.Component {

  render() {
      return (
        <div className={style.home}>
          <div className={style.aboutme}> 
            <div className={style.myintro}>
                <h2>Hello! I am Chen Ye.</h2>
                <p>I am a product designer based in San Francisco Bay Area. I aspire to solve real people problems with empathetic and innovative designs.</p>
                <p>You can read more <Link className={style.pagelink} to="/Aboutme">about me</Link>, view my <a target="_blank" href='https://drive.google.com/open?id=1MKCCPljl2Lf7yDmkCdQWYqf7N7IBwoO3'>resume</a>, or drop me an <a href="mailto:yechen0712@gmail.com">email</a>.</p>
            </div> 
            {/*}
            <div className={style.contact}>
              <div> 
              <a href='http://www.linkedin.com/in/iamchenye'><div id={style.linkedin} className={style.social}></div></a>
              <a href='https://github.com/chenye0'><div id={style.github} className={style.social}></div></a>
              <a href='https://twitter.com/_chenye'><div id={style.twitter} className={style.social}></div></a>
              </div>
           </div> */}
          </div>	
          <div className={ style.projects}>  
              
              <div className={style.thumbnail +' four columns'}>
                  <div className={style.pic} style={{backgroundImage: 'url(' + report + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      <span>Cisco Umbrella Security Report</span>
                      <p className={style.caption}>Contact me for more information</p>
                  </div>
              </div>      
              <div className={style.thumbnail +' four columns protected'}> 
            
                  <div className={style.pic} style={{backgroundImage: 'url(' + security + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Product Design at Cisco
                      <p className={style.caption}>Contact me for more information</p>
                  </div>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/CityFact">
                  <div className={style.pic} style={{backgroundImage: 'url(' + cityfact + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      City Facts
                      <p className={style.caption}>A visualization tool for relocation factors</p>
                  </div>
                </Link>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/Ffredesign">
                  <div className={style.pic} style={{backgroundImage: 'url(' + img4 + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Website Design of FarmerFrog 
                      <p className={style.caption}>Revamp a nonprofit organization's website </p>
                  </div>
                </Link>
              </div> 
             <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/Wish">
                  <div className={style.pic} style={{backgroundImage: 'url(' + wish + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Wishes Come True
                      <p className={style.caption}>A mobile app for creating and managing budgets</p>
                  </div>
                </Link>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/CandyBowl">
                  <div className={style.pic} style={{backgroundImage: 'url(' + img2 + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Sweet Treat
                      <p className={style.caption}>A reimagined candy bowl experience</p>
                  </div>
                </Link>
              </div> 
          </div> 
          <h2>Collection of Experiments</h2>
          <div className={style.projects}>
            <div className={style.thumbnail +' four columns'}> 
              <Link className={style.pagelink} to="/DataViz">
                <div className={style.pic} style={{backgroundImage: 'url(' + viz + ')'}}>
                </div>
                <div className={style.cardtitle}>
                    Data Visualizations
                    <p className={style.caption}>Data visualization tools built with d3</p>
                </div>
              </Link>
            </div> 
            <div className={style.thumbnail +' four columns'}> 
              <Link className={style.pagelink} to="/ThreejsExp">
                <div className={style.pic} style={{backgroundImage: 'url(' + img3 + ')'}}>
                </div>
                <div className={style.cardtitle}>
                    Threejs & WebGL Experiments
                    <p className={style.caption}>3D web content powered by Threejs and WebGL</p>
                </div>
              </Link>
            </div>
          </div> 
          <Footer/> 
        </div>
      );
  }
}


export default Home;
