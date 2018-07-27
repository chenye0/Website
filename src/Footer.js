import React from 'react'
import style from './project.scss'

class Footer extends React.Component {
  render() {
    return (
	  <div className={'eight columns ' + style.footer}>
     		  <div className={style.contact} >
            <a target="_blank" href='http://www.linkedin.com/in/iamchenye'><div id={style.linkedin} className={style.social}></div></a>
            <a target="_blank" href='https://medium.com/@chenye'><div id={style.medium} className={style.social}></div></a>     
            <a target="_blank" href='https://twitter.com/_chenye'><div id={style.twitter} className={style.social}></div></a>
            {/*
            <span className={style.divider}><a href="https://www.linkedin.com/chenye07">LinkedIn</a> </span>
            <span className={style.divider}><a href="https://github.com/chenye0">Github</a></span>
            <span className={style.divider}><a href="https://twitter.com/_chenye">Twitter</a></span>
            */}
          </div>
          <div>
     		    <span>Handcrafted by Chen Ye with React</span>
          </div>
	  </div>
    )
  }
}

export default Footer;

