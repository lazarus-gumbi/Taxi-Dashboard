import React from 'react'
import { PinMap } from 'react-bootstrap-icons'
import DataTable from 'react-data-table-component'

const ShoppingTrips = () => {
  const columns = [
    {
        name: 'Destination',
        selector: row => row.destination,
    },
    {
        name: 'Driver Name',
        selector: row => row.driver_name,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
]

const data = [
    {
        id:'1',
        destination:"Mbabane Swazi Plaza",
        driver_name:"Sabelo Dlamini",
        date:"12 Dec 2022",
        status:"Success"
    }
]

return (
    <div className='drivers_main'>
        <div className="drivers_top">
            <div className="drivers_heading">
                <PinMap className='heading_icon' /><h1>Shopping Trips</h1>
            </div>
        </div>
        <div className="drivers_bottom">
            <DataTable columns={columns} data={data} pagination paginationPerPage='5' paginationRowsPerPageOptions={[5,10,15,20]}/>
        </div>
    </div>)
}

export default ShoppingTrips