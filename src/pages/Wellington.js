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

import { wellingtonAccomodationData } from '../data/accommodation/wellington.js';
import { wellingtonCountryData } from '../data/country/wellington.js';

export default class Wellington extends React.Component {

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
            return <AccommodationAreaGraph data={wellingtonAccomodationData} />
        }
        if(this.state.accommodationRadioValue == 'line'){
            return <AccommodationLineGraph data={wellingtonAccomodationData}/>
        }
    }

    renderCountryGraph = () => {
        if(this.state.countryRadioValue == 'areaPercent'){
            return <CountryPercentGraph data={wellingtonCountryData} />
        }
        if(this.state.countryRadioValue == 'areaStacked'){
            return <CountryAreaGraph data={wellingtonCountryData}/>
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
                                <h1>Wellington - Accommodation Type</h1>
                                <p>
                                    This graph shows the relationship of total Wellington visitor numbers who stayed in a type of accommodation against other accommodation types over time.
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
                                <h1>Wellington - Origin Of Visitors</h1>
                                <p>
                                    This graph shows the relationship of total visitor numbers to Wellington versus their country of origin over time.
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