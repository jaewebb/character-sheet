import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import type { Sense } from '@/app/types/Sense'

export function Senses() {
  const senses = [
    { base: '15', name: 'Perception' },
    { base: '15', name: 'Investigation' },
    { base: '15', name: 'Insight' }
  ]

  return (
    <Grid component={Paper} container spacing={2} sx={{ borderRadius: 2, padding: 2, my: 2 }}>
      <Grid size={12}>
        <Typography component="h4" variant="overline">Senses</Typography>
        { senses.map((sense: Sense) => {
          return (
            <Grid key={sense.name} alignItems="center" display="flex" sx={{ py: 1 }}>
              <Typography data-testid={`sense-${sense.name}-base`} sx={{ border: 1, borderRadius: '100%', px: 1, py: 0.5 }} variant="body2">
                {sense.base}
              </Typography>
              <Typography data-testid={`sense-${sense.name}`} sx={{ border: 1, borderRadius: 1, ml: 1, px: 1, py: 0.5 }} variant="body2">
                Passive {sense.name}
              </Typography>
            </Grid>
          )
        })
      }
      </Grid>
    </Grid>
  )
}
