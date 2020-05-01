import React, { Component } from 'react';
import Axios from 'axios';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            subHeading: '',
            paragraphs: []
        }
        this. renderParagraphs = this.renderParagraphs.bind(this);
    }

    getData() {
        Axios.get('/about').then(response => 
            this.setState({
                heading: response.data.heading,
                subHeading: response.data.subHeading,
                paragraphs: response.data.paragraphs
            })
        );
    }

    renderParagraphs() {
        let key = 0;
        return this.state.paragraphs.map(paragraph => (
            <p key={key++}>{paragraph}</p>
        ));
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="container py-4">
                <h1>{this.state.heading}</h1>
                <h3>{this.state.subHeading}</h3>
                <hr/>
                {this.renderParagraphs()}
            </div>
        );
    }
  }

export default About;  