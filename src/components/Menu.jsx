import React, { Component } from 'react';
import axios from 'axios';
import { getAWSInstances } from '../actions/actions';
import Select from 'react-select';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state ={
     selectedOption: null,
   }
  }
  render() {
    // want to setState to the active value
    const options = [
          { value:'select-region', label: 'Select Region' },
          { value:'all', label: 'All Regions'},
          { value:'us-east-2', label: 'US East (Ohio)' },
          { value:'us-east-1', label: 'US East (N. Virginia)' },
          { value:'us-west-2', label: 'US West (N. California)' },
          { value:'us-west-1', label: 'US West (Oregon)' },
          { value:'ap-south-1', label: 'Asia Pacific (Mumbai)' },
          { value:'ap-northeast-3', label: 'Asia Pacific (Osaka-Local)' },
          { value:'ap-northeast-2', label: 'Asia Pacific (Seoul)' },
          { value:'ap-southeast-1', label: 'Asia Pacific (Singapore)' },
          { value:'ap-southeast-2', label: 'Asia Pacific (Sydney)' },
          { value:'ap-northeast-1', label: 'Asia Pacific (Tokyo)' },
          { value:'ca-central-1', label: 'Canada (Central)' },
          { value:'cn-north-1', label: 'China (Beijing)' },
          { value:'cn-northwest-1', label: 'China (Beijing)' },
          { value:'eu-central-1', label: 'EU (Frankfurt)' },
          { value:'eu-west-1', label: 'EU (Ireland)' },
          { value:'eu-west-2', label: 'EU (London)' },
          { value:'eu-west-3', label: 'EU (Paris)' },
          { value:'eu-north-1', label: 'EU (Stockholm)' },
          { value:'sa-east-1', label: 'South America (São Paulo)' }
    ];

    const handleChange = (selectedOption) => {
      this.setState({ selectedOption })
      if(selectedOption.value !== 'select-region'){
        
        if(selectedOption.value === 'all'){
          this.props.getAllRegions(this.props.publicKey, this.props.privateKey);
        } else{
          this.props.getAWSInstances(selectedOption.value);
        }
      }
    };
    const refresh = () => {
      this.props.getAWSInstances(this.props.currentRegion);
    };
    return (
      <div id="Menu">
        <Select
          id='select-menu' 
          value={this.state.selectedOption}
          onChange={handleChange}
          options={options}
          />
       <button id="refresh" onClick={refresh}>Refresh</button>
      </div>
    );
  }
}

export default Menu;
