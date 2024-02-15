import React from 'react'
import './UserProfile.css';

function UserDetailsCard(props) {
    const {userDetail} = props;
  return (
    <>
        <div className='card user-details'>
            <div>
                <h4>{userDetail.name}</h4>
                <h4>{userDetail.username} | {userDetail.company.catchPhrase}</h4>
            </div>
            <div>
                <h4>{userDetail.address.suite},{userDetail.address.street},{userDetail.address.city}</h4>
                <h4>{userDetail.email}</h4>
            </div>
        </div>
    </>
  )
}

export default UserDetailsCard