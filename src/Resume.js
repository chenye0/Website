import React from 'react'
import style from './home.scss'
import CloseNav from './CloseNav.js'
 

class Aboutme extends React.Component {

  render() {
      return (
        <div className={style.wrapper}>
          <CloseNav/>
          <div className={style.about}>
          </div>
          <div className={style.about}>
          </div>
        </div>
      );
  }
}

export default Aboutme;