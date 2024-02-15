import React , { useRef } from 'react';
import './UserProfile.css';

export default function ContentModel({content,onClose}) {
    const modelRef = useRef();
    const closeModel = (e) => {
        if (modelRef.current === e.target) {
            onClose();
        }
    }
  return (
    <div ref={modelRef} onClick={closeModel} className='content-model'>
        <div onClick={onClose} className='container content'>
        <div className='card row' onClick={(e) => e.stopPropagation()}>
            <h5>{content.title}</h5>
            <h6>{content.body}</h6>
            </div>
        </div>
    </div>
  )
}
