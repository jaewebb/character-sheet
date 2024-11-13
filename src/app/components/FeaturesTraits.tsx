import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export function FeaturesTraits() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 3.5, marginX: 2 }}>
      <Grid display="flex" alignItems="center" size="grow">
        <Box sx={{ marginLeft: 2 }}>
          <Typography sx={{ fontSize: '13px' }}>Hockey Player</Typography>
          <Typography sx={{ fontSize: '13px' }}>Gamer</Typography>
          <Typography sx={{ fontSize: '13px' }}>Digital Artist</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
