import { useState } from 'react';

import WbTwilightIcon from '@mui/icons-material/WbTwilight';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export function StatsGrid({ isDarkMode }: { isDarkMode: boolean }) {
  const [isInspired, setInspiration] = useState(true);

  const inspiredColor = isDarkMode ? '#ffffff' : '#000000'
  const uninspiredColor = isDarkMode ? '#121212' : '#ffffff'

  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      <Grid component={Paper} size={{ xs: 4, sm: 2 }} sx={{ borderRadius: 2, textAlign: 'center', py: 2 }}>
        <Typography component="h3" variant="overline" sx={{ fontSize: '10px', fontWeight: 'bold' }} data-testid={`proficiency`}>Proficiency</Typography>
        <Typography component="h4" sx={{ fontSize: 'h4.fontSize', mx: 1 }} variant="h3" data-testid="proficiency-score">+6</Typography>
        <Typography component="h4" variant="overline" sx={{ fontSize: '10px', fontWeight: 'bold' }} data-testid="proficiency-bonus">Bonus</Typography>
      </Grid>
      <Grid component={Paper} size={{ xs: 4, sm: 2 }} sx={{ borderRadius: 2, pt: 2, textAlign: 'center' }}>
        <Typography component="h3" variant="overline" sx={{ fontSize: '10px', fontWeight: 'bold' }} data-testid={`walking`}>Walking</Typography>
        <Grid container>
          <Grid size={7} sx={{ ml: 1.5 }}>
            <Typography component="h4" sx={{ fontSize: 'h4.fontSize', textAlign: 'right' }} variant="h3" data-testid="proficiency-score">30</Typography>
          </Grid>
          <Grid size={1} sx={{ alignContent: 'center' }}>
            <Typography component="h4" sx={{ fontSize: 'h6.fontSize', textAlign: 'left' }} variant="h3" data-testid="proficiency-score">ft.</Typography>
          </Grid>
        </Grid>
        <Typography component="h4" variant="overline" sx={{ fontSize: '10px', fontWeight: 'bold' }} data-testid="walking-speed">Speed</Typography>
      </Grid>
      <Grid size={{ xs: 4, sm: 2 }} sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center'}}>
        <Box component={Paper} sx={{ display: 'flex', justifyContent: 'center', py: 2 }} onClick={() => setInspiration(!isInspired)}>
          <WbTwilightIcon fontSize='large' sx={{ color: isInspired ? inspiredColor : uninspiredColor }} />
        </Box>
        <Typography component="h4" sx={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }} data-testid="heroic-inspiration">Heroic<br />Inspiration</Typography>
      </Grid>
    </Grid>
  )
}