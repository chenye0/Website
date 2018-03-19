import React, { PropTypes } from 'react'
import { Link } from 'react-router'
//import Footer from './Footer.js'
import security from '../assets/thumbnail2/security.png'
import report from '../assets/thumbnail2/report.png'
import img2 from '../assets/thumbnail2/candybowl.png'
import img3 from '../assets/thumbnail/island.png'
import img4 from '../assets/thumbnail2/ff.png'
import cityfact from '../assets/thumbnail2/cityfact.png'
import wish from '../assets/thumbnail2/wish.png'
import selfpic from '../assets/thumbnail/chen.png'
import style from './home.scss'

class Home extends React.Component {

  render() {
      return (
        <div className={style.home}>
          <div className={style.aboutme}> 
              <div className={style.myintro}>
                  <h3>Hello! I am Chen Ye.</h3>
                  <p>I am a product designer based in San Francisco Bay Area.</p>
                  <p>Currently I am designing with big data for Cisco, to help security practitioners hunt for network threats and protect people.</p>
                  <p>You can read more <Link className={style.pagelink} to="/Aboutme">about me</Link>, view my <a href='https://drive.google.com/open?id=19152lISm5s70YAvs0JpqBjssiNMGjkaP'>resume</a>, or email me at <a href="mailto:yechen0712@gmail.com">yechen0712@gmail.com</a>.</p>
              </div> 
              <div className={style.contact}>
                <div> 
                <a href='http://www.linkedin.com/in/iamchenye'><div id={style.linkedin} className={style.social}></div></a>
                <a href='https://github.com/chenye0'><div id={style.github} className={style.social}></div></a>
                <a href='https://twitter.com/_chenye'><div id={style.twitter} className={style.social}></div></a>
                </div>
             </div> 
          </div>	
          <div className={'eight columns '+ style.projects}>    
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/Report">
                  <div className={style.pic} style={{backgroundImage: 'url(' + report + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      <span>Cisco Umbrella Security Report</span>
                      <p className={style.caption}>An web app for communicating security data </p>
                  </div>
                </Link>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/SecurityTool">
                  <div className={style.pic} style={{backgroundImage: 'url(' + security + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Product Design at Cisco 
                      <p className={style.caption}>Data analytical tools for network threat hunting</p>
                  </div>
                </Link>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/CityFact">
                  <div className={style.pic} style={{backgroundImage: 'url(' + cityfact + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      City Facts
                      <p className={style.caption}>Visualization tool for relocation factors</p>
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
                      <p className={style.caption}>Mobile app design</p>
                  </div>
                </Link>
              </div> 
              <div className={style.thumbnail +' four columns'}> 
                <Link className={style.pagelink} to="/CandyBowl">
                  <div className={style.pic} style={{backgroundImage: 'url(' + img2 + ')'}}>
                  </div>
                  <div className={style.cardtitle}>
                      Sweet Treat
                      <p className={style.caption}>UX Design, 3D modeling, fabrication</p>
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
        </div>
      );
  }
}

// define propTypes
Home.propTypes = {
    printable: PropTypes.bool
};


export default Home;
