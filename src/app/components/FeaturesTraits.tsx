import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

export function FeaturesTraits() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 3.5, marginX: 2 }}>
      <Grid display="flex" alignItems="center" size="grow">
        <Box sx={{ marginLeft: 2 }}>
          Feats + traits
        </Box>
      </Grid>
    </Grid>
  )
}
