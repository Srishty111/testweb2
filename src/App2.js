import React, { Component } from 'react'
import './App.css'
import App1 from './App1'

function App(){

  var array=[0,0];
  var a2=0



  function handleClick(e) {
    var a= e.target.id
    if(array[0]!=a && array[1]!=a){
    a2=array[0]
    array[0]=array[1]; array[1]=a;

    if(document.getElementById(array[0]))document.getElementById(array[0]).style.backgroundColor='blue'
    if(document.getElementById(array[1]))document.getElementById(array[1]).style.backgroundColor='blue'
    if(document.getElementById(a2))document.getElementById(a2).style.backgroundColor='red'
  }}
    return (
      <div class="col">
      <br/>
      <br/>
      <br/>
        <div class="row">
        <div class="col" style={{'backgroundColor': 'red'}} id={1} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={2} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={3} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={4} onClick={handleClick}>.</div>
        </div>
        <div class="row">
        <div class="col" style={{'backgroundColor': 'red'}} id={5} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={6} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={7} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={8} onClick={handleClick}>.</div>
        </div>
        <div class="row">
        <div class="col" style={{'backgroundColor': 'red'}} id={9} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={10} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={11} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={12} onClick={handleClick}>.</div>
        </div>
        <div class="row">
        <div class="col" style={{'backgroundColor': 'red'}} id={13} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={14} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={15} onClick={handleClick}></div>
        <div class="col" style={{'backgroundColor': 'red'}} id={16} onClick={handleClick}>.</div>
        </div>
  
      </div>
    )
  }

export default App
