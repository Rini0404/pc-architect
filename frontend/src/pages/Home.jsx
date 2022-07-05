import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from "react";
import PartForm from '../components/PartForm';


function IndexPage() {
    // const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(!user){
            navigate('/SignIn');
        }

    }, [ user, navigate ]);


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
                <div className="landing-page-body">
                    <div className="landing-page-body-text">
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>
                    </div>
            </div>
            </div>
            <PartForm />
        </>
    );
}

export default IndexPage;
