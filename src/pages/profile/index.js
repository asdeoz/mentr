import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import UserInfo from '../../components/user-info';
import { useContextState } from '../../context';
import { API, graphqlOperation } from '../../graphql/client';
import { listSkills } from '../../graphql/queries';

const Profile = ({ skills }) => {
  const { dispatches: { getLoggedUser } } = useContextState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      setUser(await getLoggedUser());
    };

    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      {user && (<UserInfo user={user} skills={skills} />)}
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
