import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Start from './Start';
import Game from './Game';

export default class Routing extends React.Component{
    render(){
        return (
        <BrowserRouter>
            <Route path="/" component={Start}/>
            <Route path="/" component={Game}/>
        </BrowserRouter>
        )
    }
};
