import React, {Component} from 'react';
import './App.css';
import NameText from "./components/NameText/index";
import Emoji from "./components/Emoji/index";
import JinguLogo from "./components/JinguLogo/index";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <NameText/>
                    <JinguLogo/>
                    <Emoji/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
