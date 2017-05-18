import React from 'react';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { queenstownData } from '../../data/queenstown-accomodation.js';




class QueenstownAreaGraph extends React.Component{

    render() {
        return (
            <AreaChart width={1000} height={600} data={queenstownData}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="year"/>
                <YAxis width={70}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip wrapperStyle={{backgroundColor: '#303030'}}/>
                <Legend/>                            
                <Area type='monotone' dataKey='hotel' name="Hotel" stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='familyAndFriends' name="Family and Friends" stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type='monotone' dataKey='motel' name="Motel" stackId="1" stroke='#ffc658' fill='#ffc658' />
                <Area type='monotone' dataKey='camping' name="Camping" stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='backpackers' name="Backpackers" stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type='monotone' dataKey='luxury' name="Luxury Accomodation" stackId="1"  stroke='#ffc658' fill='#ffc658' />
                <Area type='monotone' dataKey='bAndB' name="B & B" stackId="1" stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
        )
    }
}

export default QueenstownAreaGraph;