import React from 'react';
import FillerText from './FillerText';
import '../App.css';


class Webpage extends React.Component {
    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <FillerText />
                <FillerText />
            </div>
         );
    }
}
 
export default Webpage;