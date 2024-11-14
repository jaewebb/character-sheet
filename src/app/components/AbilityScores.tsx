import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

import type { AbilityScore } from '@/app/types/AbilityScore'

export function AbilityScores() {
  const abilityScores = [
    { base: '20', modifier: '+5', name: 'Strength' },
    { base: '20', modifier: '+5', name: 'Dexterity' },
    { base: '20', modifier: '+5', name: 'Constitution' },
    { base: '20', modifier: '+5', name: 'Intelligence' },
    { base: '20', modifier: '+5', name: 'Wisdom' },
    { base: '20', modifier: '+5', name: 'Charisma' }
  ]

  return (
    abilityScores.map((score: AbilityScore) => {
      return (
        <Grid key={score.name} size={{ xs: 4, sm: 2 }} sx={{ border: 1, borderRadius: 2, textAlign: 'center', py: 2}}>
          <Typography variant="overline">{score.name}</Typography>
          <Typography sx={{ border: 1, borderRadius: 1, fontSize: 'h4.fontSize', mx: 1, mb: 1 }} variant="h3">{score.modifier}</Typography>
          <Typography sx={{ border: 1, borderRadius: '100%', fontSize: 'h6.fontSize', mx: 3 }} variant="h4">{score.base}</Typography>
        </Grid>
      )
    })
  )
}
