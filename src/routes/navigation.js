import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignUser from "../screens/authentication.js/auth.user";
import Booking from "../screens/booking/booking.page";
import Users from '../screens/users/users';
import AdminAuth from '../screens/authentication.js/auth.admin';
import SubAdmin from '../screens/authentication.js/auth.subadmin';
import CurrentBookingDashboard from '../screens/dashbord/current-booking.dashbord.pages';
import AllBookinDashboard from '../screens/dashbord/all-booking.dashbord.pages';

function Navigation() {
  return (
    <Routes>
      <Route path="/new-user" element={<SignUser />} />
      <Route path="booking" element={<Booking />} />
      <Route path="current-booking-dashboard" element={<CurrentBookingDashboard />} />
      <Route path="all-booking-dashboard" element={<AllBookinDashboard />} />
      <Route path="user-list" element={<Users />} />
      <Route path="/" element={<AdminAuth />} />
      <Route path="/sub-admin" element={<SubAdmin />} />

    </Routes>
  )
}

export default Navigation;

