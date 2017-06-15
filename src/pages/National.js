import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import AccommodationLineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AccommodationAreaGraph from '../components/AccommodationGraphs/AreaGraph.js';
import CountryPercentGraph from '../components/CountryOfOriginGraphs/AreaPercentGraph.js';
import CountryAreaGraph from '../components/CountryOfOriginGraphs/AreaGraph.js';
import SpendAreaGraph from '../components/SpendGraphs/AreaGraph.js';
import SpendLineGraph from '../components/SpendGraphs/LineGraph.js';

import { nationalAccomodationData } from '../data/accommodation/national.js';
import { nationalCountryData } from '../data/country/national.js';
import { nationalSpendData } from '../data/spend/national.js';


export default class National extends React.Component {

    state = {
        accommodationRadioValue: 'area',
        countryRadioValue: 'areaPercent',
        spendRadioValue: 'area'
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

    spendRadioButtonChange = (event, value) => {
        this.setState({
            spendRadioValue: value
        })
    }

    renderAccommodationGraph = () => {
        if(this.state.accommodationRadioValue == 'area'){
            return <AccommodationAreaGraph data={nationalAccomodationData} />
        }
        if(this.state.accommodationRadioValue == 'line'){
            return <AccommodationLineGraph data={nationalAccomodationData}/>
        }
    }

    renderCountryGraph = () => {
        if(this.state.countryRadioValue == 'areaPercent'){
            return <CountryPercentGraph data={nationalCountryData} />
        }
        if(this.state.countryRadioValue == 'areaStacked'){
            return <CountryAreaGraph data={nationalCountryData}/>
        }
    }

    renderSpendGraph = () => {
        if(this.state.spendRadioValue == 'area'){
            return <SpendAreaGraph data={nationalSpendData} />
        }
        if(this.state.spendRadioValue == 'line'){
            return <SpendLineGraph data={nationalSpendData}/>
        }
    }

    render() {
        return (
            <div className="page">

                <Tabs>
                    <Tab label="Accommodation">
                        <Paper style={{padding: 10, paddingLeft: 30}}>
                            <div>
                                <h1>National - Accommodation Type</h1>
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
                                <h1>National - Origin Of Visitors</h1>       
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

                    <Tab label="Spend">
                        <Paper
                            style={{padding: 10, paddingLeft: 30}}
                            >
                            <div>
                                <h1>National - Spend of Visitors</h1>       
                                <RadioButtonGroup name="GraphType" defaultSelected="area" onChange={this.spendRadioButtonChange} style={{marginBottom: 30}}>
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
                                {this.renderSpendGraph()}                                                          
                            </div>
                        </Paper>

                    </Tab>

                </Tabs>
                
                
                
            </div>
        );
    }
}