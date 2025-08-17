import React, { useEffect, useState } from 'react'
import './users.css'
import { useParams } from 'react-router'

const UserPage = () => {
    const params = useParams()
    // const [userData, setUserData] = useState({})
    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/users/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setUserData(data))
    //         .catch(console.log('an error occured'));
    // }, [])
    // console.log(userData);
    const data = localStorage.getItem('data')
    const usersData = JSON.parse(data)
    const userData = usersData[params.id]
    console.log(userData);
    

    return (
        <div className="user-details-container flex-col-wrap align-start justify-start">
            <h2>User Details</h2>
            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>First Name:</strong> <span className="detail-value text-left">{userData?.name?.firstname}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Last Name:</strong> <span className="detail-value text-left">{userData?.name?.lastname}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Username:</strong> <span className="detail-value text-left">{userData?.username}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Address:</strong> <span className="detail-value text-left">{`${userData?.address?.street}, ${userData?.address?.number}`}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>City:</strong> <span className="detail-value text-left">{userData?.address?.city}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Phone:</strong> <span className="detail-value text-left">{userData?.phone}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Email:</strong> <span className="detail-value text-left">{userData?.email}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Password:</strong> <span className="detail-value text-left">{userData?.password}</span>
            </div>

            <div className="detail-item w-100 flex-row-nowrap justify-between">
                <strong>Zip Code:</strong> <span className="detail-value text-left">{userData?.address?.zipcode}</span>
            </div>

        </div>
    )
}

export default UserPage
