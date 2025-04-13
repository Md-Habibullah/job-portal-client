import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className='flex gap-2 m-2 p-2'>
                    <figure>
                        <img
                            className='w-16'
                            src={company_logo}
                            alt="logo" />
                    </figure>
                    <div>
                        <h4>{company}</h4>
                        <p>{location}</p>
                    </div>

                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div>
                        <h2>{salaryRange.min} - {salaryRange.max}</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${_id}`}>
                            <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;