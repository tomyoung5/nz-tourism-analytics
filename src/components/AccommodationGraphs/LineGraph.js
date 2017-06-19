import React from 'react';
import { connect } from "react-redux";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';


class LineGraphClass extends React.Component{

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

    toThousands = (decimal, fixed = 0) => {
        return `${(decimal).toString().slice(0, -3)}K`;
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height={this.setGraphHeight()}>
                <LineChart data={this.props.data}
                    margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="year"/>
                    <YAxis tickFormatter={this.toThousands}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip wrapperStyle={{backgroundColor: '#303030'}}/>
                    <Legend/>
                    <ReferenceLine x="2016" stroke="red" label="Future Prediction" />
                    <Line type='monotone' dataKey='total' name="Total" dot={false} stroke='#fff' />
                    <Line type='monotone' dataKey='hotel' name="Hotel" dot={false} stroke='#8884d8' />
                    <Line type='monotone' dataKey='familyAndFriends' name="Family and Friends" dot={false} stroke='#82ca9d' />
                    <Line type='monotone' dataKey='motel' name="Motel" dot={false} stroke='#ffc658' />
                    <Line type='monotone' dataKey='camping' name="Camping" dot={false} stroke='#7AA7D2' />
                    <Line type='monotone' dataKey='backpackers' name="Backpackers" dot={false} stroke='#E392B4' />
                    <Line type='monotone' dataKey='luxury' name="Luxury Accomodation" dot={false} stroke='#FFBEA4' />
                    <Line type='monotone' dataKey='bAndB' name="B & B" dot={false} stroke='#95D469' />
                </LineChart >
            </ResponsiveContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        screenSize: state.browser.is
    }
};

const LineGraph = connect(
    mapStateToProps
)(LineGraphClass);

export default LineGraph;