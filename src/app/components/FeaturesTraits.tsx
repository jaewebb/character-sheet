import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export function FeaturesTraits() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" alignItems="center" size="grow">
        <Box>
          <Typography component="h5" variant="overline">Hockey Player</Typography>
          <Typography variant="body2">You spend at least an hour a week playing hockey. It boosts your mood and keeps you mentally and physically sharp.</Typography>
          <Typography variant="body2">Benefit: +1 to saving throws related to balance and teamwork</Typography>
          <Typography component="h5" variant="overline">Gamer</Typography>
          <Typography variant="body2">Playing games boosts your mood.</Typography>
          <Typography variant="body2">Benefit: +1 to saving throws related to hand-eye coordination</Typography>
          <Typography component="h5" variant="overline">Digital Artist</Typography>
          <Typography variant="body2">Making art boosts your mood.</Typography>
          <Typography variant="body2">Benefit: +1 to saving throws related to creativity</Typography>
        </Box>
      </Grid>
     </Grid>
  )
}
