import React from "react";

//Material UI
import Paper from 'material-ui/Paper';

//Banner image
import Banner from './graphic.png';

export default class Home extends React.Component {

    render() {
        return (
            <div className="page">
                
                <Paper
                    zDepth={1}
                    style={{padding: 10, paddingLeft: 30}}
                    >
                    <div>
                        <h1>Home</h1>
                        <p>
                            Tourism plays a vital role for every country’s economy. In recent years, New Zealand 
                            has seen an increase in the number of international tourists visiting the country. 
                            By analyzing and understanding the tourism patterns and trends, businesses can offer 
                            targeted marketing to attract more tourists. Predictive analytics is helping businesses 
                            achieve that. 
                        </p>
                        <img style={{width: '100%'}} src={Banner}/>              
                        <p>
                            This project delivers a predictive data model using the International 
                            Visitor Survey data by performing various regression algorithms, optimizing and 
                            evaluating them to achieve a high performing model. Time-series based forecasts are 
                            also provided for the visitor numbers for key regions. 
                        </p>                    
                        <h3 style={{marginTop: 30}}>Team Members</h3>
                        <p>Harmeet Attal Ghosh - <i>Data Analysis</i></p>
                        <p>Afsheen Ali - <i>Data Analysis</i></p>
                        <p>Tom Young - <i>Development</i></p>                        
                    </div>
                </Paper>
            </div>
        );
    }
}