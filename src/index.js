import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import ReactGA from 'react-ga'
import Home from './Home.js'
import App from './App'
import CandyBowl from './Candybowl.js'
import ThreejsExp from './ThreejsExp.js'
import FfRedesign from './FfRedesign.js'
import DataViz from './Viz.js'
import CityFact from './CityFact.js'
import Wishes from './Mobile.js'
import Resume from './Resume.js'
import SecurityTool from './CiscoSecurity.js'
import CiscoSecurity from './CiscoSecurity.js'
import report from './Report.js'
import './index.css'

ReactGA.initialize('UA-59047305-2'); 

function fireTracking() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
  	ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
	<Router onUpdate={() => {window.scrollTo(0, 0); fireTracking()}} history={browserHistory}>
	    <Route path="/" component={App}>
	 		<IndexRoute component={Home}/>
	 		<Route path="candybowl" component={CandyBowl} />
	 		<Route path="threejsexp" component={ThreejsExp} />
	 		<Route path="ffredesign" component={FfRedesign} />
	 		<Route path="dataviz" component={DataViz} />
	 		<Route path="cityfact" component={CityFact} />
	 		<Route path="wish" component={Wishes} />
	 		<Route path="report" component={report} />
	 		<Route path="securitytool" component={SecurityTool} />
	 		<Route path="ciscosecurity" component={CiscoSecurity} />
	 		<Route path="resume" component={Resume} />
	    </Route>
  	</Router>,
    document.getElementById('root')
);
