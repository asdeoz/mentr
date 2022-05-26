import { Avatar, Button, Card, CardActions, CardContent, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FoundMentorCard = ({ mentor }) => (
  <Box sx={{ display: 'inline-block', mr: 1, width: 325 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{mentor.firstName} {mentor.lastName}</Typography>
        <Typography variant="subtitle2">(<a href={`mailto: ${mentor.email}`}>{mentor.email}</a>)</Typography>
        <Typography>Mentor skills:</Typography>
        <Grid container spacing={1}>
          {mentor.skills.map(skill => (
            <Grid item key={skill.id}>
              <Chip avatar={<Avatar>{skill.proficiency}</Avatar>} label={skill.title} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="outlined">Apply</Button>
      </CardActions>
    </Card>
  </Box>
);

export default FoundMentorCard;
