import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-router'

import HighchartsStore from './store/highcharts-store'
import MainLayout from "./MainLayout";

export default class RootComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={HighchartsStore}>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </Provider>
        );
    }
}