import Image from "next/image";

import BoltIcon from '@mui/icons-material/Bolt';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";

interface AbilityScore {
  base: string
  modifier: string
  name: string
}

interface SavingThrow {
  base: string
  name: string
}

interface Skill {
  bonus: string
  expertise: boolean
  modifier: string
  name: string
  proficiency: boolean
}

function Character() {
  return (
    <Grid container spacing={2}>
      <Grid display="flex" alignItems="center" size="grow" sx={{ paddingY: 1 }}>
        <Image
          src="/avatar.png"
          alt="Avatar for character Jae Webb"
          width={75}
          height={74}
          priority
        />
        <Box sx={{ marginLeft: 2 }}>
        <Typography sx={{ fontSize: 'h6.fontSize' }} variant='h1'>Jae Webb</Typography>
          <Typography sx={{ fontSize: '14px' }} variant='h2'>Human Senior Web Application Developer</Typography>
          <Typography sx={{ fontSize: '14px' }} variant='h3'>Level 20</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

function AbilityScores() {
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
        <Grid key={score.name} size={1} sx={{ border: 1, borderRadius: 2, textAlign: 'center', paddingY: 2}}>
          <Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>{score.name}</Typography>
          <Typography sx={{ border: 1, borderRadius: 1, fontSize: 'h4.fontSize', margin: 1 }}>{score.modifier}</Typography>
          <Typography sx={{ border: 1, borderRadius: '100%', fontSize: 'h6.fontSize', marginX: 3 }}>{score.base}</Typography>
        </Grid>
      )
    })
  )
}

function SavingThrows() {
  const saves = [
    { base: '+5', name: 'STR' },
    { base: '+5', name: 'DEX' },
    { base: '+11', name: 'CON' },
    { base: '+5', name: 'INT' },
    { base: '+5', name: 'WIS' },
    { base: '+11', name: 'CHA' }
  ]

  return (
    <Grid sx={{ border: 1, borderRadius: 2, padding: 2 }} container spacing={2}>
      <Grid size={12}>
        <Typography sx={{ fontSize: '15px', textTransform: 'uppercase'}}>Saving Throws</Typography>
      </Grid>
      { saves.map((save: SavingThrow) => {
        return (
            <Grid key={save.name} size={6} sx={{ border: 1, borderRadius: 2, textAlign: 'center', paddingY: 1}}>
              <Box>{save.name} {save.base}</Box>
            </Grid>
        )
      })
    }
    </Grid>
  )
}

function Senses() {
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
      { senses.map((sense: SavingThrow) => {
        return (
            <Grid key={sense.name} size={12} sx={{ fontSize: '14px'}}>
              <Box>
                <Typography sx={{ border: 1, borderRadius: '100%', display: 'inline', padding: 1 }}>{sense.base}</Typography>
                <Typography sx={{ border: 1, borderRadius: 1, display: 'inline', marginLeft: 1, padding: 1 }}>{sense.name}</Typography>
              </Box>
            </Grid>
        )
      })
    }
    </Grid>
  )
}

function ProficienciesTraining() {
  return (
    <Grid sx={{ border: 1, borderRadius: 2, padding: 2 }} container spacing={2}>
      <Grid size={12}>
        <Typography sx={{ fontSize: '15px', marginBottom: 1, textTransform: 'uppercase' }} variant="h4">Proficiencies & Training</Typography>
        <Typography sx={{ fontSize: '13px', marginBottom: 1, textTransform: 'uppercase' }} variant="h5">Education</Typography>
        <Box sx={{ fontSize: '14px', marginBottom: 1 }}>
          <Typography sx={{ fontSize: '13px' }}>Computer Programmer/Analyst (co-op)</Typography>
          <Typography sx={{ fontSize: '13px' }}>Conestoga College</Typography>
          <Typography sx={{ fontSize: '13px' }}>Sept 2011 - Aug 2014</Typography>
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <Typography sx={{ fontSize: '13px' }}>Computer Science</Typography>
          <Typography sx={{ fontSize: '13px' }}>University of Guelph</Typography>
          <Typography sx={{ fontSize: '13px' }}>Sept 2009 - April 2011</Typography>
        </Box>
        <Typography sx={{ borderTop: 1, fontSize: '14px', paddingY: 1, textTransform: 'uppercase' }} variant="h5">Tools</Typography>
        <Box sx={{ fontSize: '14px', marginBottom: 1 }}>
          VS Code, node.js, (p)npm, git
        </Box>
        <Typography sx={{ borderTop: 1, fontSize: '14px', paddingY: 1, textTransform: 'uppercase' }} variant="h5">Languages</Typography>
        <Box sx={{ fontSize: '14px' }}>
          Common, JavaScript, TypeScript, HTML5, CSS
        </Box>
      </Grid>
    </Grid>
  )
}

function Skills() {
  const skills = [
    { bonus: '+15', expertise: true, modifier: '', name: 'TypeScript', proficiency: true },
    { bonus: '+15', expertise: true, modifier: '', name: 'JavaScript', proficiency: true },
    { bonus: '+15', expertise: true, modifier: '', name: 'HTML5', proficiency: true },
    { bonus: '+15', expertise: true, modifier: '', name: 'CSS3', proficiency: true },
    { bonus: '+15', expertise: true, modifier: '', name: 'Vue.js', proficiency: true },
    { bonus: '+15', expertise: true, modifier: '', name: 'Pinia', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'React', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Vuex', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Vue Router', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Node.js', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'npm', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Git', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'REST APIs', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Accessibility', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Vercel', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'SQL', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Vitest', proficiency: true },
    { bonus: '+10', expertise: false, modifier: '', name: 'Axe', proficiency: true },
    { bonus: '+5', expertise: false, modifier: '', name: 'Material UI', proficiency: false },
  ]

  return (
    <table className="w-full h-full">
      <thead>
        <tr>
          <th>Prof</th>
          <th>Skill</th>
          <th>Bonus</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill: Skill) => {
          return (
            <tr key={skill.name}>
              <td>
                <Box sx={{ marginLeft: 1 }}>{skill.expertise ? '◉' : skill.proficiency ? '●' : '○' }</Box>
              </td>
              <td>
                <Box>{skill.name}</Box>
              </td>
              <td>
                <Box sx={{ border: 1, borderRadius: 2, fontSize: 'h6.fontSize', textAlign: 'center' }}>{skill.bonus}</Box>
              </td>
            </tr>
          )})}
      </tbody>
    </table>
  )
}

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
