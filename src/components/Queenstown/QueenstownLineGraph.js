import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { queenstownData } from '../../data/queenstown-accomodation.js';




class QueenstownLineGraph extends React.Component{

    render() {
        return (
            <LineChart  width={1000} height={600} data={queenstownData}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="year"/>
                <YAxis width={70}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip wrapperStyle={{backgroundColor: '#303030'}}/>
                <Legend/>
                <Line type='monotone' dataKey='total' name="Total" stroke='#fff' />
                <Line type='monotone' dataKey='hotel' name="Hotel" stroke='#8884d8' />
                <Line type='monotone' dataKey='familyAndFriends' name="Family and Friends" stroke='#82ca9d' />
                <Line type='monotone' dataKey='motel' name="Motel" stroke='#ffc658' />
                <Line type='monotone' dataKey='camping' name="Camping" stroke='#8884d8' />
                <Line type='monotone' dataKey='backpackers' name="Backpackers" stroke='#82ca9d' />
                <Line type='monotone' dataKey='luxury' name="Luxury Accomodation" stroke='#ffc658' />
                <Line type='monotone' dataKey='bAndB' name="B & B" stroke='#8884d8' />
            </LineChart >
        )
    }
}

export default QueenstownLineGraph;