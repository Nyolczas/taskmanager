import React, { Component } from 'react';
import Axios from 'axios';

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
       //console.log(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/tasks', {
            name: this.state.name
        }).then(response => {
            //console.log('from handle submit: ', response);
            this.setState({
                tasks: [response.data, ...this.state.tasks],
                name: ''
            })
        });
    }

    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <div>
                        {task.name}
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Feladat Lista</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea 
                                            onChange = {this.handleChange}
                                            value={this.state.name}
                                            className="form-control" 
                                            rows="5" 
                                            maxLength="255"
                                            placeholder="A feladat leírása"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Létrehozás
                                    </button>
                                </form>
                                <hr/>
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRoot;

