import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

import type { Sense } from '@/app/types/Sense'

export function Senses() {
  const senses = [
    { base: '15', name: 'Passive Perception' },
    { base: '15', name: 'Passive Investigation' },
    { base: '15', name: 'Passive Insight' }
  ]

  return (
    <Grid sx={{ border: 1, borderRadius: 2, padding: 2, marginY: 2 }} container spacing={2}>
      <Grid size={12}>
        <Typography sx={{ fontSize: '15px', textTransform: 'uppercase'}}>Senses</Typography>
      </Grid>
      { senses.map((sense: Sense) => {
        return (
          <Grid display="flex" alignItems="center" key={sense.name}>
            <Box sx={{ border: 1, borderRadius: '100%', padding: 1 }}>
              <Typography variant="body2">{sense.base}</Typography>
            </Box>
            <Box sx={{ border: 1, borderRadius: 1, marginLeft: 1, padding: 1 }}>
              <Typography>{sense.name}</Typography>
            </Box>
          </Grid>
        )
      })
    }
    </Grid>
  )
}
