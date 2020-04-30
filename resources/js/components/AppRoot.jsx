import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        //this.handleDelete = this.handleDelete(this); // ezt nem kell bind-olni, merrt nincs benne a lifecycle-ban!
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
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">{task.name}</p>
                        <div className="d-flex">
                            <Link to={`/${task.id}/edit`} className="btn btn-info btn-sm mr-2">Szerkesztés</Link>
                            <button 
                                onClick={()=>this.handleDelete(task.id)} 
                                className="btn btn-danger btn-sm" 
                            >Törlés</button>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        ));
    }

    //read from backend
    getTasks() {
        axios.get('/tasks').then(response => 
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }

    componentDidMount() {
        this.getTasks();
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        // make delete request to the backend
        axios.delete(`/tasks/${id}`);
    }



    render() {
        return (
            <div className="container py-4">
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

