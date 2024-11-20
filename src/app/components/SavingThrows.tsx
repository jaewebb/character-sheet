import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import type { SavingThrow } from '@/app/types/SavingThrow'

export function SavingThrows() {
  const saves = [
    { base: '+5', name: 'STR' },
    { base: '+5', name: 'DEX' },
    { base: '+11', name: 'CON' },
    { base: '+5', name: 'INT' },
    { base: '+5', name: 'WIS' },
    { base: '+11', name: 'CHA' }
  ]

  return (
    <Grid component={Paper} container spacing={2} sx={{ borderRadius: 2, padding: 2 }}>
      <Grid size={12}>
        <Typography component="h4" variant="overline">Saving Throws</Typography>
      </Grid>
      { saves.map((save: SavingThrow) => {
        return (
          <Grid key={save.name} size={6} sx={{ border: 1, borderRadius: 2, textAlign: 'center', py: 1}}>
            <Box>
              <span data-testid={`saving-throw-${save.name}`}>{save.name}</span> <span data-testid={`saving-throw-${save.name}-base`}>{save.base}</span>
            </Box>
          </Grid>
        )
      })
    }
    </Grid>
  )
}
