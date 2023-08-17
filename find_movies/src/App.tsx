import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ListView from './component/view/listView';
import { getMovieLink } from './utils/links';
import DetailCard from './component/detailCard/detailCard';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route exact path={getMovieLink(":id")} component={DetailCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
