import React from 'react'
import { Link } from 'react-router'
import style from './project.scss'

const close = <svg fill="#1EAEDB" width="28" version="1.1" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 64 64" >
  <g> <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
  </g>
</svg>;

class ThreejsExp extends React.Component {
constructor(props) {
    super(props);
    this.state = {width: '100%', height: '100%'};

  }
  componentDidMount(){
  	let viewer = this.refs.threejs;

  	if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {
        let ioswidth = getComputedStyle( viewer ).width;
        let iosheight = getComputedStyle( viewer ).height;

        viewer.width = ioswidth;
        viewer.height = iosheight;
        viewer.scrolling = 'no';
    	} 
 
  }	

  render() {
    return (
      <div className={style.iframewrapper}>
        <Link className={style.closebtn} to="/">{close}</Link>
        <iframe className={style.viewer} ref="threejs" title="myiframe" src="https://chenye0.github.io/ParticleExp/index.html" allowFullScreen="allowFullScreen" frameBorder="0" width={this.state.width} height={this.state.height}></iframe>
      </div>
    )
  }
}

export default ThreejsExp;