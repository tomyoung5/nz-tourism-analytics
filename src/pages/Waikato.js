import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Bed from 'material-ui/svg-icons/maps/local-hotel';
import Flight from 'material-ui/svg-icons/action/flight-land';

//Custom Components
import AccommodationLineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AccommodationAreaGraph from '../components/AccommodationGraphs/AreaGraph.js';
import CountryPercentGraph from '../components/CountryOfOriginGraphs/AreaPercentGraph.js';
import CountryAreaGraph from '../components/CountryOfOriginGraphs/AreaGraph.js';

import { waikatoAccomodationData } from '../data/accommodation/waikato.js';
import { waikatoCountryData } from '../data/country/waikato.js';

export default class Waikato extends React.Component {

    state = {
        accommodationRadioValue: 'area',
        countryRadioValue: 'areaStacked'
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
            return <AccommodationAreaGraph data={waikatoAccomodationData} />
        }
        if(this.state.accommodationRadioValue == 'line'){
            return <AccommodationLineGraph data={waikatoAccomodationData}/>
        }
    }

    renderCountryGraph = () => {
        if(this.state.countryRadioValue == 'areaPercent'){
            return <CountryPercentGraph data={waikatoCountryData} />
        }
        if(this.state.countryRadioValue == 'areaStacked'){
            return <CountryAreaGraph data={waikatoCountryData}/>
        }
    }

    render() {
        return (
            <div className="page">
                <Tabs>
                    <Tab label="Accomodation" icon={<Bed/>}>
                        <Paper
                            style={{padding: 10, paddingLeft: 30}}
                            >
                            <div>
                                <h1>Waikato - Accommodation Type</h1>
                                <p>
                                    This graph shows the relationship of total Waikato visitor numbers who stayed in a type of accommodation against other accommodation types over time.
                                </p> 
                                <RadioButtonGroup name="GraphType" defaultSelected="area" onChange={this.accommodationRadioButtonChange} style={{marginBottom: 30}}>
                                    <RadioButton
                                        value="area"
                                        label="Stacked Area Graph"
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

                    <Tab label="Country" icon={<Flight/>}>
                        <Paper
                            style={{padding: 10, paddingLeft: 30}}
                            >
                            <div>
                                <h1>Waikato  - Origin Of Visitors</h1>
                                <p>
                                    This graph shows the relationship of total visitor numbers to Waikato versus their country of origin over time.
                                </p>      
                                <RadioButtonGroup name="GraphType" defaultSelected="areaStacked" onChange={this.countryRadioButtonChange} style={{marginBottom: 30}}>
                                    <RadioButton
                                        value="areaStacked"
                                        label="Stacked Area Graph"
                                        style={{marginBottom: 10}}
                                    />
                                    <RadioButton
                                        value="areaPercent"
                                        label="Percent Area Graph"
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