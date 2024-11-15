'use client';

import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import BoltIcon from '@mui/icons-material/Bolt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from '@mui/icons-material/LightMode';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
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
  const [tab, setTab] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTabChange = (e: React.SyntheticEvent, index: number) => setTab(index);
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
          <LightModeIcon fontSize="inherit" />
          <Switch
            checked={isDarkMode}
            onChange={handleThemeChange}
            inputProps={{ 'aria-label': isDarkMode ? 'Switch to light mode' : 'Switch to dark mode' }}
          />
          <DarkModeIcon fontSize="inherit" />
        </Grid>
      </Grid>
      <Grid container sx={{ mx: 2 }}>
        <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
          <Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }} sx={{ my: 1 }}>
            <AbilityScores />
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <SavingThrows />
              <Senses />
              <ProficienciesTraining />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ borderRadius: 2 }}>
              <Skills />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, lg: 5, xl: 6 }}>
          <Box component={Paper} sx={{ borderRadius: 2, ml: {xs: 0, lg: 2}, my: 1 }}>
            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                  <Tab label="Actions" value={1} disabled />
                  <Tab label="Features and Traits" value={2} />
                  <Tab label="Background" value={3} />
                </TabList>
              </Box>
              <TabPanel value={1}>
              </TabPanel>
              <TabPanel value={2}>
                <FeaturesTraits></FeaturesTraits>
              </TabPanel>
              <TabPanel value={3}>
                <Background></Background>
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
