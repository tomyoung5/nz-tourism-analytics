import React from "react";

//Material UI
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export default class Home extends React.Component {

    state = {
        gender: null,
        age: null,
        country: null,
        purpose: null,
        currentResult: null,
        results : []
    }

    handleGenderChange = (event, index, value) => this.setState({gender : value});
    handleAgeChange = (event, index, value) => this.setState({age : value});
    handleCountryChange = (event, index, value) => this.setState({country : value});
    handlePurposeChange = (event, index, value) => this.setState({purpose : value});

    calculate = () => {
        const { gender, age, country, purpose } = this.state

        console.log(this.state.results.length)
        console.log(this.state.results)
        
        if(gender=== null || age=== null || country=== null || purpose=== null){
            //Don't execute
        }
        else{
            this.setState({
                results: [
                    ...this.state.results,
                    {
                        gender: gender,
                        age: age,
                        country: country,
                        purpose: purpose,
                    }
                ]
            })
        }
    }

    renderResults = () => {
        const toBeRenderedList = []

        console.log(this.state.results) 

        for(let i=0; i < this.state.results.length; i++){
            //console.log(this.state.results[i].gender)
        }
        return toBeRenderedList
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

                    <SelectField
                    floatingLabelText="Gender"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                    errorText={!this.state.gender && 'Required'}
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={'female'} primaryText="Female" />
                        <MenuItem value={'male'} primaryText="Male" />
                    </SelectField>
                    <br />

                    <SelectField
                    floatingLabelText="Age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                    errorText={!this.state.age && 'Required'}
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={'20'} primaryText="20" />
                        <MenuItem value={'30'} primaryText="30" />
                        <MenuItem value={'40'} primaryText="40" />
                        <MenuItem value={'50'} primaryText="50" />
                        <MenuItem value={'60+'} primaryText="60+" />
                    </SelectField>
                    <br />

                    <SelectField
                    floatingLabelText="Country of Origin"
                    value={this.state.country}
                    onChange={this.handleCountryChange}
                    errorText={!this.state.country && 'Required'}
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={'australia'} primaryText="Australia" />
                        <MenuItem value={'china'} primaryText="China" />
                        <MenuItem value={'usa'} primaryText="USA" />
                        <MenuItem value={'uk'} primaryText="United Kingdom" />                        
                    </SelectField>
                    <br />

                    <SelectField
                    floatingLabelText="Purpose of Visit"
                    value={this.state.purpose}
                    onChange={this.handlePurposeChange}
                    errorText={!this.state.purpose && 'Required'}
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={'pleasure'} primaryText="Pleasure" />
                        <MenuItem value={'vff'} primaryText="Visiting Family and Friends" />
                        <MenuItem value={'business'} primaryText="Business" />
                    </SelectField>
                    <br />

                    <RaisedButton label="Calculate" primary={true} style={{marginTop: 20}} onTouchTap={this.calculate}/>
                    <br />

                    <Divider style={{marginTop: 30}}/>

                    <h2 style={{fontWeight: 400}}>Results</h2>

                    {this.renderResults()}

                </Paper>
            </div>
        );
    }
}