import React from 'react';
import '../JobPostings.css';

export const JobPostings = () => {
  const jobs = [
    
    // Add more job listings as needed
  ];

  return (
    <div className="JobPostings">
      <h2>Current Job Openings</h2>
      {jobs.length === 0 ? (
        <p>No job openings available at the moment. We will keep you posted!</p>
      ) : (
        <div className="JobPostings-list">
          {jobs.map(job => (
            <div className="JobPostings-card" key={job.id}>
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


