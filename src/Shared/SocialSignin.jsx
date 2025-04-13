import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialSignin = ({ from, navigate }) => {
    const { googleSignIn, user } = useContext(AuthContext);

    const handleSigninGoogle = () => {
        googleSignIn()
            .then(res => {
                const email = res?.user?.email
                const user = { email }
                axios.post('https://job-portal-server-amber-psi.vercel.app/jwt', user,
                    { withCredentials: true })
                    .then(result => {
                        console.log(result.data)
                    })
                    .catch(err => console.log(err.message))


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