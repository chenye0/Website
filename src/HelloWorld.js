import React, { PropTypes } from 'react';
import LeftBarChart from './LeftBarChart/LeftBarChart';
import style from './securitysummary.scss';
import './Helloworld.css';

class HelloWorld extends React.Component {

    render() {
        const categoryData = [{name:"worm",value:13},{name:"spam",value:15}];

        return (
          <div className="overview">
            <LeftBarChart style={style} width={100} height={130} transX={(160 - 130) / 2} data={categoryData} padding={.05}/>
          </div>
        );
    }
}

// define propTypes
HelloWorld.propTypes = {
    printable: PropTypes.bool
};


export default HelloWorld;
