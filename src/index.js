import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

class Index extends React.Component {
    render () {
        return <div> <App></App> </div>;
    }
}

ReactDOM.render(<Index />,document.querySelector('#root'));