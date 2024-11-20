import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

import type { Skill } from '@/app/types/Skill'

function createData(
  bonus: string,
  expertise: boolean,
  name: string,
  proficiency: boolean,
) {
  return { bonus, expertise, name, proficiency };
}

const skills: Skill[] = [
  { bonus: '+15', expertise: true, name: 'TypeScript', proficiency: true },
  { bonus: '+15', expertise: true, name: 'JavaScript', proficiency: true },
  { bonus: '+15', expertise: true, name: 'HTML5', proficiency: true },
  { bonus: '+15', expertise: true, name: 'CSS3', proficiency: true },
  { bonus: '+15', expertise: true, name: 'Vue.js', proficiency: true },
  { bonus: '+15', expertise: true, name: 'Pinia', proficiency: true },
  { bonus: '+10', expertise: false, name: 'React', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Vuex', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Vue Router', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Node.js', proficiency: true },
  { bonus: '+10', expertise: false, name: 'npm', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Git', proficiency: true },
  { bonus: '+10', expertise: false, name: 'REST APIs', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Accessibility', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Vercel', proficiency: true },
  { bonus: '+10', expertise: false, name: 'SQL', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Vitest', proficiency: true },
  { bonus: '+10', expertise: false, name: 'Axe', proficiency: true },
  { bonus: '+5', expertise: false, name: 'Material UI', proficiency: false },
]

const rows = skills.map(skill => createData(skill.bonus, skill.expertise, skill.name, skill.proficiency));

export function Skills() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, pb: 0.5 }}>
      <Table aria-label="Skills table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography data-testid="heading-prof" variant="overline">Prof</Typography>
            </TableCell>
            <TableCell>
              <Typography data-testid="heading-skill" variant="overline">Skill</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography data-testid="heading-bonus" variant="overline">Bonus</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" width="30px">{row.expertise ? '◉' : row.proficiency ? '●' : '○' }</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell width="30px"><Box sx={{ border: 1, borderRadius: 2, py: 0.5, textAlign: 'center' }}>{row.bonus}</Box></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
