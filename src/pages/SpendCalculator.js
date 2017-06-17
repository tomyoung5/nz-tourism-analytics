import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//Data
import { calculatorResults } from '../data/spend/calculatorResults.js';

export default class Home extends React.Component {

    state = {
        gender: null,
        age: null,
        country: null,
        purpose: null,
        results : []
    }

    handleGenderChange = (event, index, value) => this.setState({gender : value});
    handleAgeChange = (event, index, value) => this.setState({age : value});
    handleCountryChange = (event, index, value) => this.setState({country : value});
    handlePurposeChange = (event, index, value) => this.setState({purpose : value});

    calculate = () => {
        const { gender, age, country, purpose } = this.state
        
        if(gender=== null || age=== null || country=== null || purpose=== null){
            //Don't execute
        }
        else{
            //get the $$ spend
            let spend = this.getSpend()

            //get the current set of results, and add the new one
            this.setState({
                results: [
                    {
                        gender: gender,
                        age: age,
                        country: country,
                        purpose: purpose,
                        spend: spend,
                    },
                    ...this.state.results,
                ]
            })
        }
    }

    getSpend = () => {
        const { gender, age, country, purpose } = this.state

        //Iterate through the big results list
        for(let i=0; i < calculatorResults.length; i++){
            //Save one object
            let result = calculatorResults[i]
            //Test to see if the object is a match
            if(result.age === age){
                if(result.country === country){
                    if(result.purpose === purpose){
                        if(result.gender === gender){
                            //If it is a match then return the spend $$
                            return result.spend
                        }
                    }
                }
            }
        }
    }

    showBigResult = () => {
        const { results } = this.state
        
        if(typeof results[0] == 'undefined'){
            return ''
        }
        else if (!this.doesSelectionMatchState()){
            return <div style={{width: '220px'}}>?</div>
        }
        else{
            return <div>
                        <div style={{boxSizing: 'border-box',padding: 20, border: '1px solid #00bcd4', fontFamily: 'monospace'}}>
                            {'$' + results[0].spend}
                            <br />
                            <div style={{display: 'flex', justifyContent: 'center', fontSize: 18}}>per week</div>                        
                        </div>                        
                    </div>
        }
    }

    doesSelectionMatchState = () => {
        const { gender, age, country, purpose, results } = this.state

        //If it is the same then return true
        if(
            results[0].gender === gender &&
            results[0].age === age &&
            results[0].country === country &&
            results[0].purpose === purpose
            ){
            return true
        }
        //If there is a difference then return false
        else{
            return false
        }

    }

    render() {
        return (
            <div className="page">
                
                <Paper
                    zDepth={1}
                    style={{padding: 10, paddingLeft: 30}}
                    >
                    <div>
                        <h1>Spend Calculator</h1>
                    </div>

                    <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                        }}>

                        <div style={{
                                    flexBasis: '350px'
                            }}>

                            <SelectField
                            floatingLabelText="Gender"
                            value={this.state.gender}
                            onChange={this.handleGenderChange}
                            errorText={!this.state.gender && 'Required'}
                            errorStyle={{display: 'table'}}
                            >                        
                                <MenuItem value={'female'} primaryText="Female" />
                                <MenuItem value={'male'} primaryText="Male" />
                            </SelectField>
                            <br />

                            <SelectField
                            floatingLabelText="Age"
                            value={this.state.age}
                            onChange={this.handleAgeChange}
                            errorText={!this.state.age && 'Required'}
                            errorStyle={{display: 'table'}}
                            >                        
                                <MenuItem value={'20-24'} primaryText="20-24" />
                                <MenuItem value={'25-29'} primaryText="25-29" />
                                <MenuItem value={'30-34'} primaryText="30-34" />
                                <MenuItem value={'35-39'} primaryText="35-39" />
                                <MenuItem value={'35-39'} primaryText="35-39" />
                                <MenuItem value={'40-44'} primaryText="40-44" />
                                <MenuItem value={'45-49'} primaryText="45-49" />
                                <MenuItem value={'50-54'} primaryText="50-54" />
                                <MenuItem value={'55-59'} primaryText="55-59" />
                                <MenuItem value={'60-64'} primaryText="60-64" />
                                <MenuItem value={'65-69'} primaryText="65-69" />
                                <MenuItem value={'70-74'} primaryText="70-74" />
                                <MenuItem value={'75+'} primaryText="75+" />
                            </SelectField>
                            <br />

                            <SelectField
                            floatingLabelText="Country of Origin"
                            value={this.state.country}
                            onChange={this.handleCountryChange}
                            errorText={!this.state.country && 'Required'}
                            errorStyle={{display: 'table'}}
                            >                        
                                <MenuItem value={'australia'} primaryText="Australia" />
                                <MenuItem value={'china'} primaryText="China" />
                                <MenuItem value={'USA'} primaryText="USA" />
                                <MenuItem value={'UK'} primaryText="United Kingdom" />                        
                            </SelectField>
                            <br />

                            <SelectField
                            floatingLabelText="Purpose of Visit"
                            value={this.state.purpose}
                            onChange={this.handlePurposeChange}
                            errorText={!this.state.purpose && 'Required'}
                            errorStyle={{display: 'table'}}
                            >
                                <MenuItem value={'visiting friends and family'} primaryText="Visiting Family and Friends" />
                                <MenuItem value={'conference or convention'} primaryText="Conference or Convention" />
                                <MenuItem value={'business'} primaryText="Business" />
                                <MenuItem value={'education'} primaryText="Education" />
                                <MenuItem value={'other'} primaryText="Other" />
                            </SelectField>
                            <br />

                            <RaisedButton label="Calculate" primary={true} style={{marginTop: 20, marginBottom: 20}} onTouchTap={this.calculate}/>
                            <br />
                        </div>

                        <div style={{
                                        display: 'flex',         
                                        alignItems: 'center',              
                            }}>
                            <span style={{
                                            fontSize: 40,
                                            fontWeight: 600,
                                            color: '#00bcd4',
                                }}>
                                {this.showBigResult()}
                            </span>
                        </div>

                    </div>

                    <Divider style={{marginTop: 30}}/>

                    <h2 style={{fontWeight: 400}}>Results</h2>

                    
                    {/*Render results.  It takes the results array reverses it, then runs a function on each object in the array*/}
                    <Table fixedHeader={true}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>Gender</TableHeaderColumn>
                                <TableHeaderColumn>Age</TableHeaderColumn>
                                <TableHeaderColumn>Country</TableHeaderColumn>
                                <TableHeaderColumn>Purpose</TableHeaderColumn>
                                <TableHeaderColumn>Average Spend Per Week</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.state.results.map(function(result, index){
                                return <TableRow key={index}>
                                            <TableRowColumn>{result.gender.charAt(0).toUpperCase() + result.gender.slice(1)}</TableRowColumn>
                                            <TableRowColumn>{result.age}</TableRowColumn>
                                            <TableRowColumn>{result.country.charAt(0).toUpperCase() + result.country.slice(1)}</TableRowColumn>
                                            <TableRowColumn>{result.purpose.charAt(0).toUpperCase() + result.purpose.slice(1)}</TableRowColumn>
                                            <TableRowColumn>{"$" + result.spend}</TableRowColumn>
                                        </TableRow>
                            })}
                        </TableBody>
                    </Table>

                </Paper>
            </div>
        );
    }
}