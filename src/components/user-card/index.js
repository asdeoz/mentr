import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

const UserCard = ({ user, isRequest, isApplication }) => (
  <Box sx={{ display: 'inline-block', mr: 1, minWidth: 250 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{user.firstName} {user.lastName}</Typography>
        <Typography variant="subtitle2">(<a href={`mailto: ${user.email}`}>{user.email}</a>)</Typography>
        <Typography>Looking for:</Typography>
        <Chip label={user.skill} variant="outlined" />
      </CardContent>
      {isRequest && (
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" variant="outlined">Accept Mentee</Button>
        </CardActions>
      )}
      {isApplication && (
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" variant="outlined">Cancel Application</Button>
        </CardActions>
      )}
    </Card>
  </Box>
);

export default UserCard;
