import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Home = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    console.log(userData);

    return (
        <div>
            <div id='mainContent' className='flex-col-wrap align-start justify-start gap-0'>
                <div className='flex-row-nowrap align-center justify-start m-0-2 p-0-2 w-75'>
                    <ul className='flex-row-nowrap align-start justify-start l-style-none gap-1 p-0'>
                        <li>
                            <h4 style={{ borderBottom: "1px solid blue" }}>Main</h4>

                        </li>
                        <li>
                            <h4>Paid</h4>

                        </li>
                        <li>
                            <h4>Unpaid</h4>

                        </li>
                        <li>
                            <h4>Pending</h4>
                        </li>
                    </ul>
                </div>

                <div id='users'>
                    <div className='flex-row-nowrap w-100 align-center justify-around'>
                        <h5>All orders</h5>
                        <input type="search" id='searchUsers' placeholder='Search users..' />
                        <p className='filter'>filter</p>
                        <button className='addUsers'>Add users</button>
                    </div>
                    <div className='flex-row-wrap w-100 align-start justify-start gap-1'>

                        <div id='user' className='data flex-row-nowrap w-100 align-start justify-around'>
                            <h4 className='name'>Name</h4>
                            <h4 className='email'>Email</h4>
                            <h4 className='phone'>Phone</h4>
                            <h4 className='city'>City</h4>
                        </div>
                        {
                            userData.map((data, index) => (
                                <Link to={`user/${data.id}`} id={`user${index}`} key={index} className='horizontalData flex-row-nowrap w-100 align-start justify-around'>
                                    <p className='name'>{data.name.firstname}</p>
                                    <p className='email'>{data.email}</p>
                                    <p className='phone'>{data.phone}</p>
                                    <p className='city'>{data.address.city}</p>
                                </Link>

                            ))
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
