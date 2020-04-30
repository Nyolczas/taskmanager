import React, { Component } from 'react';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
       //console.log(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name);
        axios.put(`/tasks/${this.props.match.params.id}`, {
            name: this.state.name
        }).then(this.props.history.push('/'));
    }

    //read from backend
    getTasks() {
        axios.get(`/tasks/${this.props.match.params.id}/edit`).then(response => 
            this.setState({
                task: response.data.task,
                name: response.data.task.name
            })
        );
    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        //console.log(this.props);
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Feladat Szerkesztése</div>
    
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
                                    <button type="submit" className="btn btn-primary float-right">
                                        Mentés
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskEdit;