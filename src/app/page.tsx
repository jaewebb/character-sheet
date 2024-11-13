import BoltIcon from '@mui/icons-material/Bolt';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AbilityScores } from '@/app/components/AbilityScores';
import { Character } from '@/app/components/Character';
import { ProficienciesTraining } from '@/app/components/ProficienciesTraining';
import { SavingThrows } from '@/app/components/SavingThrows';
import { Senses } from '@/app/components/Senses';
import { Skills } from '@/app/components/Skills';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 2 }}>
      <main>
        <Character />
        <Grid container spacing={2} sx={{ marginY: 1 }}>
          <AbilityScores />
        </Grid>
        <Grid container spacing={2} sx={{ marginY: 2 }}>
          <Grid size={3}>
            <SavingThrows />
            <Senses />
            <ProficienciesTraining />
          </Grid>
          <Grid sx={{ border: 1, borderRadius: 2, padding: 2, textAlign: 'left'}} size={3}>
            <Skills />
          </Grid>
        </Grid>
      </main>
      <footer>
        Built with React, MaterialUI, <FavoriteIcon fontSize="inherit" />, and <BoltIcon fontSize="inherit" /> by Jae Webb<br />
        I still have a lot I&apos;d like to add to this page!<br />
        <a href="https://www.webbdevdesign.ca/">Return to my portfolio</a>
      </footer>
    </Container>
  );
}
