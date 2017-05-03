import React from "react";
import { Route } from "react-router";

import Layout from "./components/Layout/Layout.js";
import Home from "./pages/Home.js";

import Collections from "./pages/Collections";

const routes = (
    <Route component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/collections" component={Collections} />
    </Route>
);

export default routes;