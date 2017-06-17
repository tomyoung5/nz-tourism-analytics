import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import AccommodationLineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AccommodationAreaGraph from '../components/AccommodationGraphs/AreaGraph.js';
import CountryPercentGraph from '../components/CountryOfOriginGraphs/AreaPercentGraph.js';
import CountryAreaGraph from '../components/CountryOfOriginGraphs/AreaGraph.js';

import { aucklandAccomodationData } from '../data/accommodation/auckland.js';
import { aucklandCountryData } from '../data/country/auckland.js';


export default class Auckland extends React.Component {

     state = {
        accommodationRadioValue: 'area',
        countryRadioValue: 'areaPercent'
    };


    accommodationRadioButtonChange = (event, value) => {
        this.setState({
            accommodationRadioValue: value
        })
    }

    countryRadioButtonChange = (event, value) => {
        this.setState({
            countryRadioValue: value
        })
    }

    renderAccommodationGraph = () => {
        if(this.state.accommodationRadioValue == 'area'){
            return <AccommodationAreaGraph data={aucklandAccomodationData} />
        }
        if(this.state.accommodationRadioValue == 'line'){
            return <AccommodationLineGraph data={aucklandAccomodationData}/>
        }
    }

    renderCountryGraph = () => {
        if(this.state.countryRadioValue == 'areaPercent'){
            return <CountryPercentGraph data={aucklandCountryData} />
        }
        if(this.state.countryRadioValue == 'areaStacked'){
            return <CountryAreaGraph data={aucklandCountryData}/>
        }
    }

    render() {
        return (
            <div className="page">
                <Tabs>
                    <Tab label="Accomodation">
                        <Paper
                            style={{padding: 10, paddingLeft: 30}}
                            >
                            <div>
                                <h1>Auckland - Accommodation Type</h1>
                                <p>
                                    This graph shows the relationship of total Auckland visitor numbers who stayed in a type of accommodation against other accommodation types over time.
                                </p> 
                                <RadioButtonGroup name="GraphType" defaultSelected="area" onChange={this.accommodationRadioButtonChange} style={{marginBottom: 30}}>
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
                                {this.renderAccommodationGraph()}                                  
                            </div>
                        </Paper>
                    </Tab>

                    <Tab label="Country">
                        <Paper
                            style={{padding: 10, paddingLeft: 30}}
                            >
                            <div>
                                <h1>Auckland - Origin Of Visitors</h1>
                                <p>
                                    This graph shows the relationship of total visitor numbers to Auckland versus their country of origin over time.
                                </p>       
                                <RadioButtonGroup name="GraphType" defaultSelected="areaPercent" onChange={this.countryRadioButtonChange} style={{marginBottom: 30}}>
                                    <RadioButton
                                        value="areaPercent"
                                        label="Percent Area Graph"
                                        style={{marginBottom: 10}}
                                    />
                                    <RadioButton
                                        value="areaStacked"
                                        label="Stacked Area Graph"
                                    />
                                </RadioButtonGroup>
                                {this.renderCountryGraph()}                                                          
                            </div>
                        </Paper>
                    </Tab>

                </Tabs>
                
            </div>
        );
    }
}