import React from "react";

//import CollectionCard from '../components/Collection/CollectionCard';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

//Rechart stuff
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, Area, AreaChart, Pie, PieChart } from 'recharts';

import { queenstownData } from '../data/queenstown-accomodation.js';

import QueenstownLineGraph from '../components/Queenstown/QueenstownLineGraph.js';
import QueenstownAreaGraph from '../components/Queenstown/QueenstownAreaGraph.js';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

export default class Home extends React.Component {

    state = {
        //value: 1,
        radioValue: 'area'
    };

    // handleChange = (event, index, value) => this.setState({value});

    radioButtonChange = (event, value) => {
        this.setState({
            radioValue: value
        })
    }

    renderGraph = () => {
        if(this.state.radioValue == 'area'){
            return <QueenstownAreaGraph />
        }
        if(this.state.radioValue == 'line'){
            return <QueenstownLineGraph />
        }
    }

    render() {
        return (
            <div style={{backgroundColor: "#303030", padding: 20}}>
                
                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Queenstown Accomodation Types</h1>

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


                <Paper
                    zDepth={1}
                    style={{padding: 20, margin: 30}}
                    >
                    <RaisedButton                     
                        label="Default"
                        style={{margin: 30}}
                        />

                    <RaisedButton                     
                        label="Primary"
                        primary={true}
                        style={{margin: 30, color: '#fff'}}
                        />
                    
                    <RaisedButton                     
                        label="Secondary"
                        secondary={true}
                        style={{margin: 30}}
                        />

                    <TextField
                        hintText="Type Here.."
                        floatingLabelText="First Name"
                        />

                    <br />

                    <SelectField
                        floatingLabelText="Select Year"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={{margin: 30}}
                        >
                            <MenuItem value={1} primaryText="2013" />
                            <MenuItem value={2} primaryText="2014" />
                            <MenuItem value={3} primaryText="2015" />
                            <MenuItem value={4} primaryText="2016" />
                            <MenuItem value={5} primaryText="2017" />
                        </SelectField>

                    <Checkbox
                        label="Checkbox"
                        style={{margin: 30}}
                        />

                    <div style={{margin: 30}}>
                        <h2>Example Text</h2>
                        Donec porta aliquet fermentum. Sed ac mollis sem. Duis quis massa pellentesque, scelerisque diam at, pellentesque massa. Suspendisse fringilla justo sit amet leo finibus, ut accumsan nisl ultrices. Proin eu pellentesque orci. Nunc in risus lacus. Praesent rhoncus neque tincidunt dolor eleifend, in condimentum massa vestibulum. Curabitur euismod turpis quis nisi imperdiet pellentesque. Cras varius tempus massa, ut tristique orci finibus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor arcu et efficitur aliquam.
                    </div>
                </Paper>
         


                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Basic Line</h1>
                        <LineChart width={400} height={200} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>With Axis</h1>
                        <LineChart width={400} height={300} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>With Backround Lines</h1>
                        <LineChart width={600} height={300} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>With Tooltip</h1>
                        <LineChart width={600} height={300} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Simple Bar Chart</h1>
                        <BarChart width={600} height={300} data={data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Area Chart</h1>
                        <AreaChart width={600} height={400} data={data}
                            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
                        </AreaChart>
                    </div>
                </Paper>

                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Pie Chart</h1>
                        <PieChart width={400} height={300}>
                            <Pie data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                        </PieChart>
                    </div>
                </Paper>
            </div>
        );
    }
}