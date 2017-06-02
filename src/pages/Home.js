import React from "react";

//Material UI
import Paper from 'material-ui/Paper';

export default class Home extends React.Component {

    render() {
        return (
            <div className="page">
                
                <Paper
                    zDepth={1}
                    style={{padding: 20, paddingLeft: 50, margin: 30}}
                    >
                    <div>
                        <h1>Home Page</h1>
                    </div>
                </Paper>
            </div>
        );
    }
}