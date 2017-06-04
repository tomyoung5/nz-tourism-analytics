import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';

//Custom Components
import LineGraph from '../components/AccommodationGraphs/LineGraph.js';
import AreaGraph from '../components/AccommodationGraphs/AreaGraph.js';


import { queenstownData } from '../data/accommodation/queenstown.js';

export default class Queenstown extends React.Component {


    render() {
        return (
            <div className="page">

                <Tabs>
                    <Tab label="Country">
                        <Paper
                            style={{padding: 20, paddingLeft: 50, margin: 30}}
                            >
                            <div>
                                <h1>Country of Origin Of Visitors</h1>

                                
                                
                            </div>
                        </Paper>

                    </Tab>

                    <Tab label="Spend">

                    </Tab>

                </Tabs>
                
                
                
            </div>
        );
    }
}