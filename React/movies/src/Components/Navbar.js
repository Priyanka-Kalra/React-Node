import React, { Component } from 'react'
import {Link} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
        <div style={{ display: 'flex', backgroundColor: '#2E4052', padding: 0.5 }}>
            <Link to='/' style={{textDecoration:"none"}}>
                <h1 style={{ margin: '1.5rem', fontSize:'2rem',color:'#E0CA3C'}}>Movies App</h1>
            </Link>
            <Link to='/favourites' style={{textDecoration:"none"}}>
                <h2 style={{marginLeft:'1rem',marginTop:'2rem',fontSize:'1.5rem',color:'#E0CA3C'}}>Favourites</h2>
            </Link>
      </div>
    )
  }
}
