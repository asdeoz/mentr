import { Container } from '@mui/material';
import UserInfo from '../../components/user-info';

const user = {
  name: 'Peter',
  username: 'peter@phoenix.edu',
};

const Profile = () => {
  return (
    <Container maxWidth="xl">
      <UserInfo user={user} />
    </Container>
  );
};

export default Profile;
