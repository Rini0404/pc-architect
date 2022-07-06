import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import axios from 'axios';
// import PartForm from '../components/PartForm';


function IndexPage() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(!user){
            navigate('/SignIn');
        }

    }, [ user, navigate ]);

    // use axios to get data from gpus
    const [gpu, setGpu] = React.useState([]);
    React.useEffect(() => {
      axios.get("/api/gpus").then((res) => {
        setGpu(res.data);
        console.log(res.data);
      });
    }, []);


    return (
        <>
            <div className="p-20 landing-page">
                <div className="landing-page-header">
                    <div className="landing-page-header-text">
                        {/* passes in user data
                            can change it to email, if i want an email instead of name */}
                        <h1>Welcome {user && user.name } </h1>
                    </div>
                </div>
            </div>
        {/* section to display data */}
        <div className="p-20 landing-page">
            <div className="landing-page-header">
                <div className="landing-page-header-text">
                    <h1>Your Data</h1>
                </div>
                <div>
      <table>
        <thead key={gpu.id}>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Model</th>
            <th>Rank</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {gpu.map((gpu) => (
            <tr key={gpu.id}>
              <td>{gpu.Brand}</td>
              <td>{gpu.Type}</td>
              <td>{gpu.Model}</td>
              <td>{gpu.Rank}</td>
              <a href={gpu.URL}>{gpu.URL} </a>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>

        </>
    );
}

export default IndexPage;
