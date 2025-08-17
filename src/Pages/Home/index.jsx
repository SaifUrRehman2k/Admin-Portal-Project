import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router'

const Home = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
                localStorage.setItem('data', JSON.stringify(data))
            }
            )
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
                        <p className='filter flex-row-nowrap align-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000ff"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" /></svg>
                            filter
                        </p>
                        <button className='addUsers flex-row-nowrap align-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000ff"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" /></svg>
                            Add users
                        </button>
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
