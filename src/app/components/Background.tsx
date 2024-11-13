import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export function Background() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 3.5, marginX: 2 }}>
      <Grid>
        <Box sx={{ marginBottom: 1 }}>
          <Typography sx={{ fontSize: '13px' }}>Computer Programmer/Analyst (co-op)</Typography>
          <Typography sx={{ fontSize: '13px' }}>Conestoga College</Typography>
          <Typography sx={{ fontSize: '13px' }}>Sept 2011 - Aug 2014</Typography>
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <Typography sx={{ fontSize: '13px' }}>Computer Science</Typography>
          <Typography sx={{ fontSize: '13px' }}>University of Guelph</Typography>
          <Typography sx={{ fontSize: '13px' }}>Sept 2009 - April 2011</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
