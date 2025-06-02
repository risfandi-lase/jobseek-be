import express from 'express';
import mockJobs from '../mockJobs.js';


const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/jobs', (req, res) => {
  const { title, location } = req.query;
  let filteredJobs = mockJobs;
  if (title) {
    filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()));
  }
  if (location) {
    filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
  }
  res.json(filteredJobs);
});

app.post('/jobs', (req, res) => {
  const newJob = req.body;
  // Generate a new unique ID (simple increment based on array length)
  newJob.id = (mockJobs.length + 1).toString();
  mockJobs.push(newJob);
  res.status(201).json(newJob);
});

// Bookmark a job
app.post('/jobs/:id/bookmark', (req, res) => {
  const jobId = req.params.id;
  const job = mockJobs.find(j => j.id === jobId);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  job.is_bookmarked = true;
  res.json({ message: 'Job bookmarked', job });
});

// Unbookmark a job
app.post('/jobs/:id/unbookmark', (req, res) => {
  const jobId = req.params.id;
  const job = mockJobs.find(j => j.id === jobId);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  job.is_bookmarked = false;
  res.json({ message: 'Job unbookmarked', job });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;