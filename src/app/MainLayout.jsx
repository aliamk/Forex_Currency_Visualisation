import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import HighchartsMenu from "./components/navigation/presentation/HighchartsMenu";
import DashboardHome from "./components/dashboards/container/DashboardHome";

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HighchartsMenu />
                <main>
                    <Suspense fallback={<div style={{ textAlign: "center", marginTop: "10%" }}>
                        <h5>Loading...</h5>
                    </div>}>
                        <Switch>
                            <Route path="/" component={DashboardHome} exact />
                            <Route path="/home" component={DashboardHome} exact />
                        </Switch>
                    </Suspense>
                </main>
            </div>
        )
    }
}
