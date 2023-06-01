import React from 'react'
import {
  Link
} from 'react-router-dom';
export default function ThankYouPage() {
  return (
    <div className='relative' style={{marginTop:0}}>
    <div className="Name" style={{paddingTop:350,paddingBottom: 100, marginLeft:550}}>
      <img src="ThankyouImage.png" alt="No Image"></img>
    </div>
    <div className="Name">
    <Link  to="/"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "style={{ marginLeft:850}} > <strong>Back </strong></Link>
    </div>
    </div>
  )
}
