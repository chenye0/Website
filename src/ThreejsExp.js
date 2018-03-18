import React from 'react'
import CloseNav from './CloseNav.js'
import style from './project.scss'


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
        <CloseNav/>
        <iframe className={style.viewer} ref="threejs" title="myiframe" src="https://chenye0.github.io/ParticleExp/index.html" allowFullScreen="allowFullScreen" frameBorder="0" width={this.state.width} height={this.state.height}></iframe>
      </div>
    )
  }
}

export default ThreejsExp;