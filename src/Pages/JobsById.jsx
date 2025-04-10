import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobsById = () => {
    const { _id, title, company, deadline, } = useLoaderData()

    return (
        <div className='m-10'>
            <h2>Job details for{title}</h2>
            <h2>Apply for {company}</h2>
            <h2>Deadline{deadline}</h2>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobsById;