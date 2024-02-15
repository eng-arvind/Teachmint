import React, { useEffect } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserCard({userData}) {

  const userId= userData.id;

    const [userPost, setUserPost] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {setUserPost(data)})
      .catch((error) => console.log(error));
    }, [userId]);
  return (
    <Link to={`/profile/${userId}`} className="card">
      <div className="container d-flex user-card">
          <h4>Name: {userData.name}</h4>
          <h4>Post: {userPost ? userPost.length : 'No posts found' }</h4>
      </div>
    </Link>
  );
}

export default UserCard;
