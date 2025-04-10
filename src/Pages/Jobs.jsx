import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(result => {
                setJobs(result.data)
                console.log(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}
                    ></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;