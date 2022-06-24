import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function alertBalls (){
  alert("Balls")
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertBalls} />
  </div>,
  document.getElementById('root')
);