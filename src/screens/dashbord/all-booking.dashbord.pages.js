import React from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/navbar'
import { BookMock } from '../../mocks/booking.mock'
import { ScreenTable } from './current-booking.dashbord.pages'
import Example from '../tables/tables'

function AllBookinDashboard() {
    return (
        <div className='container'>
            <SideBar />
            <div className='container__screen'>
                <Navbar />
                <div className='container__screen__login'>
                   <Example/>
                </div>
            </div>
        </div>
    )
}

export default AllBookinDashboard
