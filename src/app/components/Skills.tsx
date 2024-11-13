import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import type { Skill } from '@/app/types/Skill'

export function Skills() {
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
                <Typography>{skill.name}</Typography>
              </td>
              <td>
                <Typography sx={{ border: 1, borderRadius: 2, fontSize: 'h6.fontSize', textAlign: 'center' }}>{skill.bonus}</Typography>
              </td>
            </tr>
          )})}
      </tbody>
    </table>
  )
}
