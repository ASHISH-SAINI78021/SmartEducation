import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Page from '../Page';
import { useAuth } from '../context/auth';

const Private = () => {
    const [ok, setok] = useState(false);
    const [auth , setAuth] = useAuth();
    useEffect(() => {
      const init = async () => {
        try {
          let response = await fetch(
            "http://localhost:8080/api/v1/auth/get-session",
            {
              method: "GET" ,
              headers : {
                "Authorization" : auth?.token
              }
            }
          );
  
          if (response.ok){
            response = await response.json();
            console.log(response);
            if (response.success){
              setok(true);
            }
            else {
              setok(false);
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
  
      if (auth?.token) init();
    }, [auth?.token]);
  
  
    return <div>
      {
        (ok) ? <Outlet/> : <Page/>
      }
    </div>;
  };
  
  export default Private;
  
