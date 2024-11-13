'use client';

import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import BoltIcon from '@mui/icons-material/Bolt';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tab, { tabClasses } from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { AbilityScores } from '@/app/components/AbilityScores';
import { Background } from '@/app/components/Background';
import { Character } from '@/app/components/Character';
import { FeaturesTraits } from '@/app/components/FeaturesTraits';
import { ProficienciesTraining } from '@/app/components/ProficienciesTraining';
import { SavingThrows } from '@/app/components/SavingThrows';
import { Senses } from '@/app/components/Senses';
import { Skills } from '@/app/components/Skills';

export default function Home() {
  const [tab, setTab] = useState(1);

  const handleTabChange = (e: React.SyntheticEvent, index: number) => setTab(index);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = createTheme({
    colorSchemes: {
      dark: prefersDarkMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <main>
      <Character />
      <Grid container sx={{ marginX: 2 }}>
        <Grid size={6}>
          <Grid container spacing={2} sx={{ marginY: 1 }}>
            <AbilityScores />
          </Grid>
          <Grid container spacing={2} sx={{ marginY: 2 }}>
            <Grid size={6}>
              <SavingThrows />
              <Senses />
              <ProficienciesTraining />
            </Grid>
            <Grid sx={{ border: 1, borderRadius: 2, padding: 2, textAlign: 'left'}} size={6}>
              <Skills />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <Box sx={{ border: 1, borderRadius: 2, marginX: 2, marginY: 1 }}>
            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                  <Tab label="Background" value={1} />
                  <Tab label="Features and Traits" value={2} />
                  <Tab label="Actions" value={3} disabled />
                </TabList>
              </Box>
              <TabPanel value={1}>
                <Background></Background>
              </TabPanel>
              <TabPanel value={2}>
                <FeaturesTraits></FeaturesTraits>
              </TabPanel>
            </TabContext>
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
