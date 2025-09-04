import React, { useEffect, useState } from 'react'
import { data, Link, Outlet, useParams } from 'react-router'
import Skeleton from '../../components/Skeleton'
import Users from '../Users'
import LeftSideBar from '../../components/LeftSideBar'
import Header from '../../components/Header'

const Home = () => {


    return (
        <>
            <Header logo='Dashboard' />

            <div className='home flex-row-nowrap'>
                <LeftSideBar />
                <div id='mainContent' className='flex-col-wrap align-start justify-start gap-0'>

                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Home
