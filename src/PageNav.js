import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import style from './project.scss'

class PageNav extends React.Component {
  render() {
    const map = {
      '/Securitytool': 'Security Product Design',
      '/FfRedesign': 'FarmerFrog Web Design',
      '/ThreejsExp': 'WebGL Experiments',
      '/Report': 'Umbrella Security Report',
      '/CandyBowl': 'Sweet Treat',
      '/Wish': 'Mobile App Design',
      '/CityFact': ' City Facts'
    }
    return (
      <div className={style.projectnav}> 
        <div className={style.navbtn}>
          <Link to={this.props.nextPage}><button>Next - {map[this.props.nextPage]} </button></Link>
        </div>
      </div>
    )
  }
}

// define propTypes
PageNav.propTypes = {
    nextPage: PropTypes.string,
    prePage: PropTypes.string
};


export default PageNav;

