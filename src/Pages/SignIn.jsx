import Lottie from 'lottie-react';
import registerLottieData from '../assets/lottie/signin.json'
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import SocialSignin from '../Shared/SocialSignin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        // const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
        // if (!regex.test(password)) {
        //     alert('enter valid password')
        //     return;
        // }

        signIn(email, password)
            .then(result => {
                console.log(result.user.email)
                const user = { email }
                axios.post('http://localhost:5000/jwt', user,
                    { withCredentials: true })
                    .then(result => {
                        console.log(result.data)
                    })
                    .catch(err => console.log(error.message))
                // navigate(from)
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-80 ml-16">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Signin now!</h1>
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signin</button>
                        </div>
                    </form>
                    <SocialSignin navigate={navigate} from={from}></SocialSignin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;