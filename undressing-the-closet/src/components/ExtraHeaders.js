import React from 'react'
import { Link } from 'react-router-dom'

const ExtraHeaders = ({display, showDisplay}) => 
    <div>
    { display ? 
    <Link to='/wardrobe'><button onClick={showDisplay}>MY WARDROBE</button></Link>
    : <Link to='/outfits'><button onClick={showDisplay}>MY OUTFITS</button></Link> }
    </div>

export default ExtraHeaders