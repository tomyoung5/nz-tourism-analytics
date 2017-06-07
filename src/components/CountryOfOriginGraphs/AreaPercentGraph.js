import React from 'react';
import { connect } from "react-redux";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';


class AreaPercentGraphClass extends React.Component{

    setGraphHeight = () =>{
        const { screenSize } = this.props

        if(screenSize.extraSmall){
            return 300
        }
        else if(screenSize.small){
            return 400
        }
        else if(screenSize.medium){
            return 500
        }
        else{
            return 600
        }
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height={this.setGraphHeight()}>
                <AreaChart data={this.props.data}
                    margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="year"/>
                    <YAxis width={70}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip wrapperStyle={{backgroundColor: '#303030'}}/>
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