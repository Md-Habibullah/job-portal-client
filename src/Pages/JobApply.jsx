import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    // console.log(id, user)

    const handleApply = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('https://job-portal-server-amber-psi.vercel.app/jobApplications', jobApplication)
            .then(result => {

                console.log(result.data)
                Swal.fire({
                    title: "Applied Successful",
                    icon: "success",
                    draggable: true,
                    confirmButtonText: 'Applied Done'
                });
                navigate('/myApplications')
            })
            .catch(err => console.log(err.message))

    }
    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Apply Job and Good Luck</h1>
            <form onSubmit={handleApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn</span>
                    </label>
                    <input type="url" name='linkedin' placeholder="LinkedIn" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github</span>
                    </label>
                    <input type="url" name='github' placeholder="Github" className="w-full input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume" className="input w-full input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="w-full btn btn-primary">Apply</button>
                </div>
            </form>
        </div>

    );
};

export default JobApply;