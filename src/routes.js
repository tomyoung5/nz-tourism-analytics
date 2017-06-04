import React from "react";
import { Route } from "react-router";

import Layout from "./components/Layout/Layout.js";
import Home from "./pages/Home.js";
import National from "./pages/National.js";
import Auckland from "./pages/Auckland";
import Waikato from "./pages/Waikato";
import Wellington from "./pages/Wellington";
import WestCoast from "./pages/WestCoast";
import Queenstown from "./pages/Queenstown";

const routes = (
    <Route component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/national" component={National} />
        <Route path="/auckland" component={Auckland} />
        <Route path="/waikato" component={Waikato} />
        <Route path="/wellington" component={Wellington} />
        <Route path="/west-coast" component={WestCoast} />
        <Route path="/queenstown" component={Queenstown} />
    </Route>
);

export default routes;