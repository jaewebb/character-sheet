import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import type { Sense } from '@/app/types/Sense'

export function Senses() {
  const senses = [
    { base: '15', name: 'Passive Perception' },
    { base: '15', name: 'Passive Investigation' },
    { base: '15', name: 'Passive Insight' }
  ]

  return (
    <Grid component={Paper} container spacing={2} sx={{ borderRadius: 2, padding: 2, my: 2 }}>
      <Grid size={12}>
        <Typography variant="overline">Senses</Typography>
        { senses.map((sense: Sense) => {
          return (
            <Grid key={sense.name} alignItems="center" display="flex" sx={{ py: 1 }}>
              <Typography sx={{ border: 1, borderRadius: '100%', px: 1, py: 0.5 }} variant="body2">{sense.base}</Typography>
              <Typography sx={{ border: 1, borderRadius: 1, ml: 1, px: 1, py: 0.5 }} variant="body2">{sense.name}</Typography>
            </Grid>
          )
        })
      }
      </Grid>
    </Grid>
  )
}
