import React, { useState } from 'react';
import useJobs from '../Hooks/useJobs';
import HotJobsCard from './HotJobsCard';

const AllJobs = () => {
    const [sort, setSort] = useState(false)
    const [searchLocation, setSearchLocation] = useState("")
    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")
    const [companySearch, setCompanySearch] = useState("")
    const { jobs, loading } = useJobs(sort, searchLocation, companySearch, minSalary, maxSalary);
    console.log(sort, searchLocation)

    console.log(jobs)
    if (loading) {
        return <h3>Loading.....</h3>
    }
    return (
        <div>
            <h1 className='py-5 text-center text-4xl font-bold'>All Jobs</h1>
            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort ? "Sorted by salary" : "Sort by salary"}
                </button>
                <input onKeyUp={(e) => setCompanySearch(e.target.value)} type="text" className='input w-full max-w-xl ml-4' placeholder='Search by Company Name' />
                <input onKeyUp={(e) => setSearchLocation(e.target.value)} type="text" className='input w-full max-w-xl ml-4' placeholder='Search by Location' />

                <div className='space-y-3'>
                    <input onKeyUp={(e) => setMinSalary(e.target.value)} type="text" className='input w-full max-w-xs ml-4' placeholder='Min Salary' />
                    <input onKeyUp={(e) => setMaxSalary(e.target.value)} type="text" className='input w-full max-w-xs ml-4' placeholder='Max salary' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}
                    ></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;