import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

function JobHistory() {
  const employment = [
    { title: 'Senior Web Application Developer', location: 'Royal Bank of Canada', start: 'July 2018', end: 'Present' },
    { title: 'Web Developer', location: 'Freelance', start: 'November 2017', end: 'July 2018' },
    { title: 'Programmer/Analyst', location: 'BITtelligent Software', start: 'November 2015', end: 'November 2017' },
    { title: 'Software Developer', location: 'Brock Solutions', start: 'Aug 2014', end: 'November 2015' },
  ]
  return (
    employment.map((job, index) => {
      return (
        <Box key={`job-${index}`} sx={{ marginBottom: 1 }}>
          <Typography variant="overline">{job.title}</Typography>
          <Typography variant="body2">{job.location}</Typography>
          <Typography variant="body2">{job.start} - {job.end}</Typography>
        </Box>
      )
  }));
}

function EducationHistory() {
  const education = [
    { program: 'Computer Programmer/Analyst (co-op)', school: 'Conestoga College', start: 'Sept 2011', end: 'Aug 2014' },
    { program: 'Computer Science', school: 'University of Guelph', start: 'Sept 2009', end: 'April 2011' },
  ]
  return (
    education.map((school, index) => {
      return (
        <Box key={`school-${index}`}  sx={{ marginBottom: 1 }}>
          <Typography variant="overline">{school.program}</Typography>
          <Typography variant="body2">{school.school}</Typography>
          <Typography variant="body2">{school.start} - {school.end}</Typography>
        </Box>
      )
  }));
}

export function Background() {
  return (
    <Grid container>
      <Grid size={12}>
        <Typography variant="overline">Work Experience</Typography>
        <Divider sx={{ marginBottom: 1 }} variant="fullWidth"></Divider>
        <JobHistory></JobHistory>
        <Typography variant="overline">Education</Typography>
        <Divider sx={{ marginBottom: 1 }} variant="fullWidth"></Divider>
        <EducationHistory></EducationHistory>
      </Grid>
    </Grid>
  )
}
