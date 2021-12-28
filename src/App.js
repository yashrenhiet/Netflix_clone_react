import React from 'react';
import './App.css';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1> Hey this is my first react app</h1>
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
