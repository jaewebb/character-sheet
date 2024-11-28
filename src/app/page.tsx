'use client';

import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

import { AbilityScores } from '@/app/components/AbilityScores';
import { Character } from '@/app/components/Character';
import { CharacterTabs } from '@/app/components/CharacterTabs';
import { ProficienciesTraining } from '@/app/components/ProficienciesTraining';
import { SavingThrows } from '@/app/components/SavingThrows';
import { SensesList } from '@/app/components/SensesList';
import { Skills } from '@/app/components/Skills';
import { StatsGrid } from '@/app/components/StatsGrid';

import { ThemeToggle } from '@/app/components/ThemeToggle';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeChange = (e: React.SyntheticEvent, checked: boolean) => setIsDarkMode(checked);

  const themeLight = createTheme({
    palette: {
      background: {
        default: '#eee'
      }
    }
  });
  
  const themeDark = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight }>
      <CssBaseline />
      <main>
        <Grid container>
          <Grid size={10}>
            <Character />
          </Grid>
          <Grid display="flex" justifyContent="end" alignItems="center" size={2} sx={{ px: 2 }}>
            <ThemeToggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mx: 2, my: 1 }}>
          <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
            <AbilityScores />
          </Grid>
          <Grid size={{ xs: 12, lg: 5, xl: 6 }}>
            <StatsGrid isDarkMode={isDarkMode} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mx: 2, my: 2 }}>
          <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <SavingThrows />
                <SensesList />
                <ProficienciesTraining />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} sx={{ borderRadius: 2 }}>
                <Skills />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, lg: 5, xl: 6 }}>
            <Box component={Paper} sx={{ borderRadius: 2 }}>
              <CharacterTabs />
            </Box>
          </Grid>
        </Grid>
      </main>
      <footer>
        Built with React, MaterialUI, <FavoriteIcon fontSize="inherit" />, and <BoltIcon fontSize="inherit" /> by Jae Webb<br />
        I still have a lot I&apos;d like to add to this page!<br />
        <a href="https://www.webbdevdesign.ca/">Return to my portfolio</a>
      </footer>
    </ThemeProvider>
  );
}
