import { Container } from '@mui/material';
import UserInfo from '../../components/user-info';
import { useContextState } from '../../context';
import { API, graphqlOperation } from '../../graphql/client';
import { listSkills } from '../../graphql/queries';

const Profile = ({ skills }) => {
  const { state } = useContextState();

  const user = state?.userInformation?.user;

  return (
    <Container maxWidth="xl">
      <UserInfo user={user} skills={skills} />
    </Container>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await API.graphql(graphqlOperation(listSkills));

    return {
      props: {
        skills: response?.data?.listSkills?.items,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return { props: {} };
}

export default Profile;
