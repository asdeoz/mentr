import { Typography } from "@mui/material";
import UserCard from "../user-card";

const MentorRequests = ({ requests }) => (
  <>
    <Typography variant="h2">Mentorship Requests</Typography>
    <Typography variant="h3">People asking to be mentored by you</Typography>
    {requests?.length === 0
      ? (
        <Typography>You have no mentorship requests at the moment.</Typography>
      )
      : (
        requests.map(request => (
          <UserCard key={request.id} user={request.user} isRequest />
        ))
      )
    }
  </>
);

export default MentorRequests;
