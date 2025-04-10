import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import SignIn from '../Pages/SignIn';
import JobsById from '../Pages/JobsById';
import PrivateRoute from './PrivateRoute';
import JobApply from '../Pages/JobApply';
import MyApplication from '../Pages/MyApplication';
import AddJob from '../Pages/AddJob';
import MyPostedJobs from '../Pages/MyPostedJobs';
import ViewApplications from '../Pages/ViewApplications';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Wrong Route</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "jobs/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                element: <PrivateRoute><JobsById /></PrivateRoute>
            },
            {
                path: "jobApply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: "myApplications",
                element: <PrivateRoute><MyApplication /></PrivateRoute>
            },
            {
                path: "addJob",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "myPostedJobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "viewApplications/:job_id",
                loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
                element: <PrivateRoute><ViewApplications /></PrivateRoute>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router
