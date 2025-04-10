import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialSignin = ({ from, navigate }) => {
    const { googleSignIn } = useContext(AuthContext);

    const handleSigninGoogle = () => {
        googleSignIn()
            .then(result => {
                navigate(from)
                console.log(result)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className='m-4'>
            <div className="divider">OR</div>
            <button onClick={handleSigninGoogle} className="btn btn-primary">Google</button>
        </div>

    );
};

export default SocialSignin;