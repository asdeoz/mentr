import { Typography } from "@mui/material";
import UserCard from "../user-card";

const MentorApplications = ({ applications }) => (
  <>
    {applications?.length > 0 && (
      <>
        <Typography variant="h2">Mentorship Applications</Typography>
        <Typography variant="h3">People you are asking to be your mentor</Typography>
        {applications.map(application => (
          <UserCard key={application.id} user={application.user} isApplication />
        ))}
      </>
    )}
  </>
);

export default MentorApplications;
