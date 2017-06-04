import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import LineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AreaGraph from '../components/AccommodationGraphs/AreaGraph.js';

import { waikatoAccomodationData } from '../data/accommodation/waikato.js';
import { waikatoCountryData } from '../data/country/waikato.js';

export default class Waikato extends React.Component {

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
            return <AreaGraph data={waikatoAccomodationData} />
        }
        if(this.state.radioValue == 'line'){
            return <LineGraph data={waikatoAccomodationData}/>
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
                                <h1>Waikato</h1>

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