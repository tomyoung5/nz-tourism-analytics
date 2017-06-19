import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import routes from "./routes.js";
import store from "./store.js";

import normalize from 'normalize.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*importing to build our own theme*/
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const app = document.getElementById('app');

/*Creating our own theme to over-ride the orignal*/
const muiTheme = getMuiTheme(darkBaseTheme)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            {routes}
        </MuiThemeProvider>
    </Provider>
, app)