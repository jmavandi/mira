import React, {Component} from 'react';
import { connect } from 'react-redux';

import Cyto from '../cyto/cyto';
import '../styles/App.scss';


class Graph extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    let fetching;
    if(!this.props.fetchingFlag && !this.props.finishedFlag) {
      fetching = <div id="welcome"> <h1>Welcome to Mira</h1><p>An AWS visaluzer to help visualize your web instances</p></div>
    }
    if(this.props.fetchingFlag){
      fetching = <div id="loading" ><img src="../src/assets/loading.svg" alt="Loading..."></img></div>
    } 

    return (
      <div id="graphContainer">
        <div id="graph">
        </div>
        <div id="cytoscape">
        {fetching}
          <Cyto regionData={this.props.regionData} getNodeDetails={this.props.getNodeDetails} fetchingFlag={this.props.fetchingFlag}
          edgeTable = {this.props.edgeTable} />
          {/* sgRelationships={this.props.sgRelationships}
          sgNodeCorrelations={this.props.sgNodeCorrelations}/> */}
        </div>
      </div>
    )
  }
}

export default Graph