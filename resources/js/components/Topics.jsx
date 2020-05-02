import React, { Component } from 'react';
import Chart from "react-apexcharts";

import TopicInput from './TopicInput';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options1: {
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series1: [
                {
                    name: "Series1-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                    type: "bar"
                }, 
                {
                    name: "Series1-2",
                    data: [15, 20, 22.5, 25, 28, 45, 58, 108],
                    type: "line"
                }, 
            ],
            series2: [
                {
                    name: "Series2-1",
                    data: [0, 5, 45, 12, 70, 55, 70, 91],
                    type: "area"
                }, 
                {
                    name: "Series2-2",
                    data: [5, 8, 13, 2, -5, 1, 70, 25],
                    type: "bar"
                }, 
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTopics() {
        axios.get('/topics').then(response =>
            //console.log(response.data)
            
                this.setState({
                    options1: {
                        xaxis: {
                            categories: [...response.data.date]
                        }
                    },
                    series1: [
                        {
                            name: "Series1-1",
                            data: [...response.data.s11],
                            type: "bar"
                        }, 
                        {
                            name: "Series1-2",
                            data: [...response.data.s12],
                            type: "line"
                        }, 
                    ],
                    series2: [
                        {
                            name: "Series2-1",
                            data: [...response.data.s21],
                            type: "area"
                        }, 
                        {
                            name: "Series2-2",
                            data: [...response.data.s22],
                            type: "bar"
                        }, 
                    ]
                }) 
            );
    }

    componentDidMount() {
        this.getTopics();
    }

    handleSubmit(e) {
        e.preventDefault();
        e.persist();
        //console.log(e.target.date.value);
        axios.post('/topics', {
            date: e.target.date.value,
            s11: e.target.s11.value,
            s12: e.target.s12.value,
            s21: e.target.s21.value,
            s22: e.target.s22.value
        }).then(response => {
            //console.log('from handle submit: ', response);
            this.setState((prevState) => ({
                options1: {
                    xaxis: {
                        categories: [...prevState.options1.xaxis.categories, e.target.date.value]
                    }
                },
                series1: [
                    {
                        name: prevState.series1[0].name,
                        data: [...prevState.series1[0].data, e.target.s11.value],
                        type: prevState.series1[0].type
                    },
                    {
                        name: prevState.series1[1].name,
                        data: [...prevState.series1[1].data, e.target.s12.value],
                        type: prevState.series1[1].type
                    }
                ],
                series2: [
                    {
                        name: prevState.series2[0].name,
                        data: [...prevState.series2[0].data, e.target.s21.value],
                        type: prevState.series2[0].type
                    },
                    {
                        name: prevState.series2[1].name,
                        data: [...prevState.series2[1].data, e.target.s22.value],
                        type: prevState.series2[1].type
                    }
                ]
            })); 
        });
    }

    render() {
        return (
            <div className="container py-4">
                <h2>Topics</h2>
                <div className="row flex-row-reverse">
                    <div className="col-12 col-sm-6">
                        <div className="card">
                            <div className="card-header">Új eredmény hozzáadása</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} className="w-100 d-flex align-items-end">
                                    <TopicInput title="Dátum" id="date"/>
                                    <TopicInput title="Series1-1" id="s11"/>
                                    <TopicInput title="Series1-2" id="s12"/>
                                    <TopicInput title="Series2-1" id="s21"/>
                                    <TopicInput title="Series2-2" id="s22"/>                                    
                                    <button type="submit" className="btn btn-primary btn-sm col-2 px-0">
                                        Mentés
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Chart
                        options={this.state.options1}
                        series={this.state.series1}
                        type="line"
                        />
                        <Chart
                        options={this.state.options1}
                        series={this.state.series2}
                        type="line"
                        />
                    </div>
                </div>
            </div>
        );
    }
  }

export default Topics;  