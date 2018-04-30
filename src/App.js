import React, { Component } from 'react';
import './styles/App.css';
import FirstLayer from './components/FirstLayer';
import SecondLayer from './components/SecondLayer';
import ThirdLayer from './components/ThirdLayer';
import FourthLayer from './components/FourthLayer';
import FifthLayer from './components/FifthLayer';
import SixthLayer from './components/SixthLayer';
import EducationLayer from './components/EducationLayer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FirstLayer/>
                <SecondLayer/>
                <EducationLayer/>
                <ThirdLayer/>
                <FourthLayer/>
                <FifthLayer/>
                <SixthLayer/>
                <footer><span>Minkyu Ham &#169; {(new Date()).getFullYear()}</span></footer>
            </div>
        );
    }
}

export default App;
