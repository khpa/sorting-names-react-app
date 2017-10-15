import React, { Component } from 'react';
import '../App.css';

const RemoveButton = function({item, actionFct, className}) {
    return (
        <div>
          <p className={ className }>
            <b>{ item }</b>
            <button onClick={ () => actionFct(item) }>remove</button>
          </p>
        </div>)
}

export default RemoveButton;