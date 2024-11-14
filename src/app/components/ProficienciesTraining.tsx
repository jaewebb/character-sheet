import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export function ProficienciesTraining() {
  return (
    <Grid component={Paper} container spacing={2} sx={{ borderRadius: 2, padding: 2 }}>
      <Grid size={12}>
        <Typography component="h4" variant="overline">Proficiencies & Training</Typography>
        <Typography component="h5" variant="overline">Education</Typography>
        <Box>
          <Typography variant="body2">10+ years of experience</Typography>
          <Typography variant="body2">Post-secondary Education</Typography>
        </Box>
        <Divider sx={{ my: 1 }} variant="fullWidth"></Divider>
        <Typography component="h5" variant="overline">Tools</Typography>
        <Box>
          <Typography variant="body2">VS Code, node.js, (p)npm, git</Typography>
        </Box>
        <Divider sx={{ my: 1 }} variant="fullWidth"></Divider>
        <Typography component="h5" variant="overline">Languages</Typography>
        <Box>
          <Typography variant="body2">Common, JavaScript, TypeScript, HTML5, CSS</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
