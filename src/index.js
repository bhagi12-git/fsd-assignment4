import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Button from './button.js';
function Welcome(){
  return(
    <div className="ui cards">
    <div className="card">
      <div className="content">
        <img className="right floated mini ui image" src={faker.image.image()} />
        <div className="header">
          Jenny Hess
        </div>
        <div className="meta">
          New user
        </div>
        <div className="description">
          Jenny requested to view your <br />
          contact details
        </div>
      </div>
     <Button />
    </div>
  </div>
  
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

