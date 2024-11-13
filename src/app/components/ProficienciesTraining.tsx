import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

export function ProficienciesTraining() {
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
