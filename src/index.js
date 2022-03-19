import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">Hello {new Date().toLocaleTimeString(this.props)}</span>
            </h1>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
