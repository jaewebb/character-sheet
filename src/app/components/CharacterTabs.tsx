import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Background } from '@/app/components/Background';
import { FeaturesTraits } from '@/app/components/FeaturesTraits';

export function CharacterTabs() {
  const [tab, setTab] = useState(3);

  const handleTabChange = (e: React.SyntheticEvent, index: number) => setTab(index);

  return (
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
  )
}