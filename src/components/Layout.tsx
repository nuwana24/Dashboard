import React, { useState } from 'react'
import Header from "./Header";
import HeaderTest from "./HeaderTest";
import Footer from "./footer";
import UserPage from "./user-page/UserPage"
import OrganizationPage from "./organization-page/OrganizationPage"
import OtherPage from "./OtherPage"
import { Routes, Route } from "react-router-dom"



type Props = {}

const Layout = (props: Props) => {
    return (
        <>

            <Routes>
                <Route path="/user" element={<UserPage/>}>
                </Route>
                <Route path="/organization" element={<OrganizationPage/>}>
                </Route>
                <Route path="/" element={<OtherPage/>}>
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}
export default Layout