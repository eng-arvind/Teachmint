import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import UserDetailsCard from './UserDetailsCard';
import UserPostCard from './UserPostCard';
import './UserProfile.css';
import ContentModel from './ContentModel';
import TimeCard from './TimeCard';

function UserProfile() {
    const { userId } = useParams();
    const [userPost, setUserPost] = useState([]);
    const [userDetail, setUserDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
        .then((response) => response.json())
        .then((data) => {setUserDetail(data[0]);})
        .catch((error) => console.log(error));

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {setUserPost(data);})
        .catch((error) => console.log(error));
    }, []);

    const [showModel, setShowModel] = useState(false);
    const [content, setContent] = useState(null);
    const openContentModel = (content) => {
        setContent(content);
        setShowModel(true);
    }
  return (
    <div className='container-fluid mt-3 mb-2'>
    <div className='header row'>
        <div className='back-button col-sm-12 col-md-12 col-lg-2'>
            <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className='time-clock col-sm-12 col-md-12 col-lg-9'>
            <TimeCard/>
        </div>
    </div>
    <div className='container mt-3'>
    <div className='user-profile row'>
        {userDetail ?  <UserDetailsCard userDetail={userDetail}/>
        : 'Loading...'}
    </div>
    <div className='user-post row'>
        {userPost?.map((post) => (<UserPostCard key={post.id} posts={post} openContentModel={openContentModel}/>))}
    </div>
    </div>
    {showModel && <ContentModel content={content} onClose={() => setShowModel(false)} />}
    </div>
  )
}

export default UserProfile