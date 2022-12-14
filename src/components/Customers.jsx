import React, { useState } from 'react'
import { People } from 'react-bootstrap-icons'
import DataTable from 'react-data-table-component'


const Customers = () => {

    const columns = [
        {
            name: 'Full Name',
            selector: row => row.fullname,
        },
        {
            name: 'Phone Number',
            selector: row => row.phone_number,
        },
        {
            name: 'ID Number',
            selector: row => row.id_number,
        },
    ]

    const data = [
        {
            id: 1,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 2,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
        {
            id: 3,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 4,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
        {
            id: 5,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 6,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
        {
            id: 7,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 8,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
        {
            id: 9,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 10,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',
        },
        {
            id: 11,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 12,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
        {
            id: 13,
            fullname: 'Sabelo Dlamini',
            id_number: '00032666548',

            phone_number: '7865 5656'
        },
        {
            id: 14,
            fullname: 'Sakhile Dlamini',
            id_number: '99656555898',

            phone_number: '7865 5656'
        },
    ]

    const [addCustomers, setAddCustomers] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")


    const addCustomer = (e) => {
        e.preventDefault();

        setAddCustomers(false)

    }

    return (
        <div className='drivers_main'>
            <div className="drivers_top">
                <div className="drivers_heading">
                    <People className='heading_icon' /><h1>Customers</h1>
                </div>
                <button className='add_driver' onClick={() => setAddCustomers(true)}>ADD CUSTOMER</button>
            </div>
            <div className="drivers_bottom">
                {addCustomers ? <div className="addForm">
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
                                <label htmlFor="IDNumber">ID Number:</label>
                                <input type="text" name="id_number" id="id_number" placeholder='Personal ID Number' value={idNumber} onChange={(e) => { setIdNumber(e.target.value) }} />
                            </div>
                            <div className="driverFG">
                                <label htmlFor="PhoneNumber">Phone Number:</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                            </div></div>
                        <button type="submit" className='submit_driver' onClick={addCustomer}>SUBMIT</button>
                    </form>
                </div> : <DataTable columns={columns} data={data} pagination paginationPerPage='5' paginationRowsPerPageOptions={[5, 10, 15, 20]} />}
            </div>
        </div>
    )
}

export default Customers