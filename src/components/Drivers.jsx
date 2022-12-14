import React, { useState } from 'react'
import { CarFront } from 'react-bootstrap-icons'
import '../styles/componentStyles/Drivers.css'
import DataTable from 'react-data-table-component'

const Drivers = () => {
    const columns = [
        {
            name: 'Full Name',
            selector: row => row.fullname,
        },
        {
            name: 'License Plate No',
            selector: row => row.license,
        },
        {
            name: 'Rating',
            selector: row => row.rating,
        },
        {
            name: 'Phone Number',
            selector: row => row.history,
        },
    ]

    let data = [
        {
            id: 1,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 2,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 3,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 4,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 5,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 6,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 7,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 8,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 9,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 10,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
        },
        {
            id: 11,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 12,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 13,
            fullname: 'Sabelo Dlamini',
            license: 'ASD 203 AL',
            rating: '4/5',
            history: '7865 4598'
        },
        {
            id: 14,
            fullname: 'Ghostbusters',
            license: 'BSD 465 AS',
            rating: '4/5',
            history: '7865 4598'
        },
    ]

    const [addDrivers, setaddDrivers] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [licensePlate, setLicensePlate] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const addDriver = (e) => {
        e.preventDefault();
        
        setaddDrivers(false)

    }

    return (
        <div className='drivers_main'>
            <div className="drivers_top">
                <div className="drivers_heading">
                    <CarFront className='heading_icon' /><h1>Drivers</h1>
                </div>
                <button className='add_driver' onClick={() => setaddDrivers(true)}>ADD DRIVER</button>

            </div>
            <div className="drivers_bottom">
                {addDrivers ? <div className="addForm">
                    <form action="#" className="addDriversForm">
                        <div className="form_container">
                            <div className="driverFG">
                                <label htmlFor="FirstName">First Name:</label>
                                <input type="text" name="firstName" id="firstName" placeholder='First Name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            </div>
                            <div className="driverFG">
                                <label htmlFor="LastName">Last Name:</label>
                                <input type="text" name="lastName" id="lastName" placeholder='Last Name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </div></div><div className="form_container">
                            <div className="driverFG">
                                <label htmlFor="License">License Plate No:</label>
                                <input type="text" name="licensePlate" id="licensePlate" placeholder='License Plate Number' value={licensePlate} onChange={(e) => { setLicensePlate(e.target.value) }} />
                            </div>
                            <div className="driverFG">
                                <label htmlFor="PhoneNumber">Phone Number:</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                            </div></div>
                        <button type="submit" className='submit_driver' onClick={addDriver}>SUBMIT</button>
                    </form>
                </div> : <DataTable columns={columns} data={data} pagination paginationPerPage='5' paginationRowsPerPageOptions={[5, 10, 15, 20]} />}
            </div>
        </div>
    )
}

export default Drivers