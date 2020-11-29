import React, {Component} from 'react';
import './App.css';
import NameText from "./components/NameText/index";
import Emoji from "./components/Emoji/index";
import JinguLogo from "./components/JinguLogo/index";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NameText/>
                <JinguLogo/>
                <Emoji/>
            </div>
        );
    }
}

export default App;
