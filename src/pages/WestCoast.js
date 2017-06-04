import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import LineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AreaGraph from '../components/AccommodationGraphs/AreaGraph.js';

import { westCoastAccomodationData } from '../data/accommodation/west-coast.js';
import { westCoastCountryData } from '../data/country/west-coast.js';

export default class WestCoast extends React.Component {

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
            return <AreaGraph data={westCoastAccomodationData} />
        }
        if(this.state.radioValue == 'line'){
            return <LineGraph data={westCoastAccomodationData}/>
        }
    }

    render() {
        return (
            <div className="page">
                <Tabs>
                    <Tab label="Accomodation">
                        <Paper
                            style={{padding: 20, paddingLeft: 50, margin: 30}}
                            >
                            <div>
                                <h1>West Coast</h1>

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