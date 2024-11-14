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
            <Typography sx={{ border: 1, borderRadius: '100%', paddingX: 1, paddingY: 0.5 }} variant="body2">{sense.base}</Typography>
            <Typography sx={{ border: 1, borderRadius: 1, marginLeft: 1, paddingX: 1, paddingY: 0.5 }} variant="body2">{sense.name}</Typography>
          </Grid>
        )
      })
    }
    </Grid>
  )
}
