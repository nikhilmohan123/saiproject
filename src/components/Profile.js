import React from 'react'

const Profile = props =>  {
    const url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`
    return (
        <div className="profile">
            <img src={url} alt="person" />
            <h3>Name : {props.name}</h3>
            <h3>Company: {props.company}</h3>
            <h3>job : {props.job}</h3>
            <h3>email : {props.email}</h3>
        </div>
    )
}

export default Profile
