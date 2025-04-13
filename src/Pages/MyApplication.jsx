import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get(`https://job-portal-server-amber-psi.vercel.app/jobApplication?email=${user.email}`,
            { withCredentials: true })
            .then(result => {
                setJobs(result.data)
            })
    }, [user.email])

    const handleDelete = (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://job-portal-server-amber-psi.vercel.app/jobApplication?id=${id}`)
                    .then(() => {
                        const remainJobs = jobs.filter(job => job._id !== id);
                        const updatedJobs = [...remainJobs]
                        setJobs(updatedJobs)
                    })
                    .catch(error => console.log(error.message));
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }

        })

    }
    return (
        <div>
            <h3 className='flex'>My Applications : {(jobs?.length) ? jobs?.length : <><div className="flex w-52 flex-col gap-4 mx-auto my-64">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div></>}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {jobs.map(job => <tr key={job._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-sm opacity-50">{job.location}</div>

                                <br />
                            </td>
                            <td>Purple</td>
                            <th>
                                <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyApplication;