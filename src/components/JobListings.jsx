import { useState, useEffect } from "react"; //using useEffect() to fetch data from jobs.json SERVER -Backend (http://localhost:8000/jobs)
//import jobs_copy from "../jobs_copy.json"; //taking data from jobs_copy.json ARRAY
import JobList from "./JobList";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const jobListings = isHome? jobs_copy.slice(0,3) :jobs_copy;
  // console.log(jobListings)
  useEffect(() => {
    //fetching data from backend (JSON SERVER)
    const fetchJobs = async () => {
      const apiUrl = isHome? "/api/jobs?_limit=3" : "/api/jobs"
      try {
        // const res = await fetch("http://localhost:8000/jobs")
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map((job) => (
           <JobList key={job.id} job={job}/>
          ))}
        </div> */}

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobList key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
