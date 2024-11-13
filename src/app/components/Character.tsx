import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

export function Character() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 3.5, marginX: 2 }}>
      <Grid display="flex" alignItems="center" size="grow">
        <Avatar alt="Jae Webb" src="/avatar.png" sx={{ height: '74px', width: '75px' }} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography sx={{ fontSize: 'h6.fontSize' }} variant='h1'>Jae Webb</Typography>
          <Typography sx={{ fontSize: '14px' }} variant='h2'>Human Senior Web Application Developer</Typography>
          <Typography sx={{ fontSize: '14px' }} variant='h3'>Level 20</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
