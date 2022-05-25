import { Typography } from "@mui/material";
import UserCard from '../user-card';

const UserList = ({ title, users }) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      {users?.length > 0
        ? (
          users.map(user => (
            <UserCard key={user.email} user={user} />
          ))
        )
        : (
          <Typography>You have 0 {title.toLowerCase()} at the moment.</Typography>
        )
      }
    </>
  );
};

export default UserList;
