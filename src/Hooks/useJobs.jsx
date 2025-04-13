import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (
    sort = false,
    searchLocation = "",
    companySearch = "",
    minSalary = "",
    maxSalary = ""
) => {
    const [jobs, setJobs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://job-portal-server-amber-psi.vercel.app/jobs?sort=${sort}&search=${searchLocation}&company=${companySearch}&min=${minSalary}&max=${maxSalary}`)
            .then(res => {
                setLoading(false)
                setJobs(res.data)
            })
    }, [sort, searchLocation, companySearch, minSalary, maxSalary])
    return { jobs, loading };
};

export default useJobs;