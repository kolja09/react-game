import React, { useState } from 'react';
import './styles.scss'
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
    const [myChoice, setMyChoice] = useState('');
    const [score, setScore] = useState(0)
    return (
        <>
            <div className='container'>
                <Header score={score}/>
                <Switch>
                    <Route exact path='/'>
                        <Play setMyChoice={setMyChoice}/>
                    </Route>
                    <Route path='/game'>
                        <Game myChoice={myChoice} score={score} setScore={setScore}/>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </>
    );
};

export default App;