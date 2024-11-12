import Image from "next/image";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import styles from "./page.module.css";

interface AbilityScore {
  base: string
  modifier: string
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
      <Grid size={1}>
        <Image
          src="/avatar.png"
          alt="Avatar for character Jae Webb"
          width={75}
          height={74}
          priority
        />
      </Grid>
      <Grid size={3}>
        <Box>Jae Webb</Box>
        <Box>Human Senior Web Application Developer</Box>
        <Box>Level 20</Box>
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
          <Box sx={{ fontSize: '14px' }}>{score.name}</Box>
          <Box sx={{ fontSize: 'h4.fontSize' }}>{score.modifier}</Box>
          <Box sx={{ fontSize: 'h6.fontSize' }}>{score.base}</Box>
        </Grid>
      )
    })
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
    <table>
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
                <Box sx={{ textAlign: 'center' }}>{skill.expertise ? '◉' : skill.proficiency ? '●' : '○' }</Box>
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
    <div className={styles.page}>
      <main className={styles.main}>
        Coming Soon!
        {/* <Character />
        <Grid container spacing={2}>
          <AbilityScores />
        </Grid>
        <Grid container spacing={2}>
          <Grid sx={{ paddingY: 2, textAlign: 'left'}} size={4}>
            <Skills />
          </Grid>
        </Grid> */}
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
