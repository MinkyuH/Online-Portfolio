import React, { Component } from 'react';
import './styles/App.css';
import FirstLayer from './components/FirstLayer';
import SecondLayer from './components/SecondLayer';
import ThirdLayer from './components/ThirdLayer';
import FourthLayer from './components/FourthLayer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FirstLayer/>
                <SecondLayer/>
                <ThirdLayer/>
                <FourthLayer/>
            </div>
        );
    }
}

export default App;
