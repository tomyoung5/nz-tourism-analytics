import React from 'react';
import { connect } from "react-redux";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';


class AreaPercentGraphClass extends React.Component{
    
    componentWillMount(){
        this.convertToPercent()
    }

    state = {
        newData: null,
    };

    convertToPercent = () => {
        const { data } = this.props

        //Deep clone the array so it doesnt affect other graphs
        var newData = JSON.parse(JSON.stringify(data))

        //Convert numbers to %
        for(let i = 0; i < newData.length; i++){
            newData[i].australia = ( (newData[i].australia / newData[i].total) * 100 )
            newData[i].china = ( (newData[i].china / newData[i].total) * 100 )
            newData[i].usa = ( (newData[i].usa / newData[i].total) * 100 )
            newData[i].uk = ( (newData[i].uk / newData[i].total) * 100 )
        }

        //Put new cloned data into the component state
        this.setState({
            newData: newData
        })
    }

    //Converts the Tooltip from 6dp to 1dp and adds a '%'
    toolTipFormatter = (value) => {
        return value.toFixed(1).concat('%')
    }

    setGraphHeight = () =>{
        const { screenSize } = this.props

        if(screenSize.extraSmall){
            return 300
        }
        else if(screenSize.small){
            return 350
        }
        else if(screenSize.medium){
            return 400
        }
        else{
            return 500
        }
    }

    toPercent = (decimal, fixed = 0) => {
        return `${(decimal).toFixed(fixed)}%`;
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height={this.setGraphHeight()}>
                <AreaChart data={this.state.newData}
                    margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="year"/>
                    <YAxis tickFormatter={this.toPercent}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip 
                        wrapperStyle={{backgroundColor: '#303030'}}
                        formatter={this.toolTipFormatter} />
                    <Legend/>
                    <ReferenceLine x="2016" stroke="red" label="Future Prediction" />
                    <Area type='monotone' dataKey='australia' name="Australia" stackId="1" stroke='#8884d8' fill='#8884d8' />
                    <Area type='monotone' dataKey='china' name="China" stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                    <Area type='monotone' dataKey='usa' name="USA" stackId="1" stroke='#ffc658' fill='#ffc658' />
                    <Area type='monotone' dataKey='uk' name="UK" stackId="1" stroke='#7AA7D2' fill='#7AA7D2' />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        screenSize: state.browser.is
    }
};

const AreaPercentGraph = connect(
    mapStateToProps
)(AreaPercentGraphClass);

export default AreaPercentGraph;