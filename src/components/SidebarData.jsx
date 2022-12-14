import React from 'react'
import { CarFront, JournalText, PinMap } from "react-bootstrap-icons"
import { People } from "react-bootstrap-icons"
export const SidebarData = [
    {
        icon: <CarFront/>,
        title: 'Drivers',
        link: '/dashboard/drivers'
    },
    {
        icon: <People/>,
        title: 'Customers',
        link: '/dashboard/customers'
    },
    {
        icon: <PinMap/>,
        title: 'Shopping Trips',
        link: '/dashboard/trips'
    },
    {
        icon: <JournalText/>,
        title: 'Driver History',
        link: '/dashboard/driver_history'
    },
    {
        icon: <JournalText/>,
        title: 'Customer History',
        link: '/dashboard/customer_history'
    }
]