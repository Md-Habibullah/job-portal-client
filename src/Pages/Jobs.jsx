import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';
import useJobs from '../Hooks/useJobs';

const Jobs = () => {

    const { jobs, loading } = useJobs();
    console.log(jobs)

    if (loading) { return <h2>Loading....</h2> }
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