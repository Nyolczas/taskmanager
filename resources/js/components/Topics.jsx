import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                    type: "bar"
                }, 
                {
                    name: "series-2",
                    data: [15, 20, 22.5, 25, 28, 45, 58, 108],
                    type: "line"
                }, 
            ]
        };
    }

    render() {
        return (
            <div className="container py-4">
                <h2>Topics</h2>
                <div className="mixed-chart">
                    <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    />
                </div>
            </div>
        );
    }
  }

export default Topics;  