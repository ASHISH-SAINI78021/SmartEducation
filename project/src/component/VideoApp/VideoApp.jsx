import React, { useState } from 'react';
import styles from './VideoApp.module.css';
import { useNavigate } from 'react-router-dom';

const VideoApp = () => {
    const [id , setid] = useState("");
    const [username , setusername] = useState("");
    const navigate = useNavigate()

    const handleSubmit = ()=> {
        navigate(`/dashboard/videoApp/room/${id}`);
    }

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>This is a Video App</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Enter Room Id" className={styles.input} value={id} onChange={(e)=> setid(e.target.value)} />
        <input type="text" placeholder="Enter your username" className={styles.input} value={username} onChange={(e)=>setusername(e.target.value)} />
        <button className={styles.button} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default VideoApp;
