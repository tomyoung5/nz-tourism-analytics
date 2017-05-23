import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';


class LineGraph extends React.Component{

    render() {
        return (
            <LineChart  width={1000} height={600} data={this.props.data}
                margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="year"/>
                <YAxis width={70}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip wrapperStyle={{backgroundColor: '#303030'}}/>
                <Legend/>
                <ReferenceLine x="2016" stroke="red" label="Future Prediction" />
                <Line type='monotone' dataKey='total' name="Total" dot={false} stroke='#fff' />
                <Line type='monotone' dataKey='hotel' name="Hotel" dot={false} stroke='#8884d8' />
                <Line type='monotone' dataKey='familyAndFriends' name="Family and Friends" dot={false} stroke='#82ca9d' />
                <Line type='monotone' dataKey='motel' name="Motel" dot={false} stroke='#ffc658' />
                <Line type='monotone' dataKey='camping' name="Camping" dot={false} stroke='#8884d8' />
                <Line type='monotone' dataKey='backpackers' name="Backpackers" dot={false} stroke='#82ca9d' />
                <Line type='monotone' dataKey='luxury' name="Luxury Accomodation" dot={false} stroke='#ffc658' />
                <Line type='monotone' dataKey='bAndB' name="B & B" dot={false} stroke='#8884d8' />
            </LineChart >
        )
    }
}

export default LineGraph;