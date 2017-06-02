import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

//Custom Components
import LineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AreaGraph from '../components/AccommodationGraphs/AreaGraph.js';

import { wellingtonData } from '../data/accommodation/wellington.js';

export default class Wellington extends React.Component {

    state = {
        radioValue: 'area'
    };


    radioButtonChange = (event, value) => {
        this.setState({
            radioValue: value
        })
    }

    renderGraph = () => {
        if(this.state.radioValue == 'area'){
            return <AreaGraph data={wellingtonData} />
        }
        if(this.state.radioValue == 'line'){
            return <LineGraph data={wellingtonData}/>
        }
    }

    render() {
        return (
            <div className="page">
                
                <Paper
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Wellington</h1>

                        <RadioButtonGroup name="GraphType" defaultSelected="area" onChange={this.radioButtonChange} style={{marginBottom: 30}}>
                            <RadioButton
                                value="area"
                                label="Area Graph"
                                style={{marginBottom: 10}}
                            />
                            <RadioButton
                                value="line"
                                label="Line Graph"
                            />
                        </RadioButtonGroup>

                        {this.renderGraph()}
                        
                    </div>
                </Paper>
            </div>
        );
    }
}