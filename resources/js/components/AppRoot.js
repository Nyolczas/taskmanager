import React from 'react';
import ReactDOM from 'react-dom';

function AppRoot() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">AppRoot Component</div>

                        <div className="card-body">I'm an AppRoot component from React!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppRoot;

if (document.getElementById('root')) {
    ReactDOM.render(<AppRoot />, document.getElementById('root'));
}
