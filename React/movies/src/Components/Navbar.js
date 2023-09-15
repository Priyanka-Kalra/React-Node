import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{ display: 'flex', backgroundColor: 'lightblue', padding: 0.5 }}>
        <h1 style={{ margin: '1.5rem', fontSize:'2rem'}}>Movies App</h1>
        <h2 style={{marginLeft:'1rem',marginTop:'2rem',fontSize:'1.5rem'}}>Favourites</h2>
      </div>
    )
  }
}
