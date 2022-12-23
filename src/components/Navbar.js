import React from 'react'
import './Navbar.css'
export const Navbar=()=>{// Return nav component
    return(
        <nav className="nav">
            <img src='pokeball.png' alt='' style={{width:'30px',height:'30px',transform:'translateY(10px) translateX(20px)'}}/>
            <h1 style={{textAlign:'center'}}>POKÉDEX</h1>
            <img src='pokeball.png' alt=''style={{width:'30px',height:'30px',transform:'translateY(10px) translateX(-20px) rotateY(180deg)'}}/>
        </nav>
    )
}//