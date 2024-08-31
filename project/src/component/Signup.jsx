// src/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            let response = await fetch("http://localhost:8080/api/v1/auth/register" , {
                method : "POST" ,
                headers : {
                    "Content-Type" : "application/json"
                } ,
                body : JSON.stringify({email , password})
            })

            if (response.ok){
                response = await response.json();
                if (response.success){
                    navigate("/");
                }
                else {
                    console.log("try again");
                }
            }


        } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
                <label style={{ marginBottom: '10px' }}>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </label>
                <label style={{ marginBottom: '20px' }}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </label>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
                <Link to="/">Already has an account ?</Link>
            </form>
        </div>
    );
};

export default Signup;
