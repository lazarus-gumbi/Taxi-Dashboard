import React from 'react'
import { Search } from 'react-bootstrap-icons'
import '../styles/componentStyles/History.css'

const History = () => {
  return (
    <div className='history'>
        <div className="history_top">
            <div className="search_form">
            <input type="text" name="license_number" id="license_number" className='license_number' placeholder='LICENSE PLATE NUMBER'/>
            <button className="history_search"><Search/></button></div>
        </div>
        <div className="history_bottom">
            <div className="history_data">
                <h1 className="place_holder">SEARCH LICENSE PLATE NUMBER</h1>
            </div>
        </div>
    </div>
  )
}

export default History