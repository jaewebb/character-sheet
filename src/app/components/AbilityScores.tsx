import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
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
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      {
        abilityScores.map((score: AbilityScore) => {
          return (
            <Grid key={score.name} component={Paper} size={{ xs: 4, sm: 2 }} sx={{ borderRadius: 2, textAlign: 'center', py: 2 }}>
              <Typography component="h3" variant="overline" data-testid={`ability-score-${score.name}`}>{score.name}</Typography>
              <Typography component="h4" sx={{ border: 1, borderRadius: 1, fontSize: 'h4.fontSize', mx: 1, mb: 1 }} variant="h3" data-testid={`ability-score-${score.name}-modifier`}>{score.modifier}</Typography>
              <Typography component="h4" sx={{ border: 1, borderRadius: '100%', fontSize: 'h6.fontSize', mx: 3 }} variant="h4" data-testid={`ability-score-${score.name}-base`}>{score.base}</Typography>
            </Grid>
          )
        })
      }
    </Grid>
  )
}
