import React, { Component } from 'react';

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
       //console.log(e.target.value);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Feladat Lista</div>
    
                            <div className="card-body">
                                <form>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRoot;

