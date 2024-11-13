import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export function Background() {
  return (
    <Grid container>
      <Grid size={12}>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="overline">Computer Programmer/Analyst (co-op)</Typography>
          <Typography variant="body2" >Conestoga College</Typography>
          <Typography variant="body2">Sept 2011 - Aug 2014</Typography>
        </Box>
        <Divider sx={{ marginY: 1 }} variant="fullWidth"></Divider>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="overline">Computer Science</Typography>
          <Typography variant="body2">University of Guelph</Typography>
          <Typography variant="body2">Sept 2009 - April 2011</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
