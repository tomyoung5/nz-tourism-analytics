import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import LineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AreaGraph from '../components/AccommodationGraphs/AreaGraph.js';

import { aucklandAccomodationData } from '../data/accommodation/auckland.js';
import { aucklandCountryData } from '../data/country/auckland.js';


export default class Auckland extends React.Component {

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
            return <AreaGraph data={aucklandAccomodationData} />
        }
        if(this.state.radioValue == 'line'){
            return <LineGraph data={aucklandAccomodationData}/>
        }
    }

    render() {
        return (
            <div className="page">
                <Tabs>
                    <Tab label="Accomodation">
                        <Paper
                            style={{paddingLeft: 10, margin: 30, marginTop: 80}}
                            >
                            <div>
                                <h1>Auckland</h1>

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
                    </Tab>

                    <Tab label="Country">
                    </Tab>

                </Tabs>
                
            </div>
        );
    }
}