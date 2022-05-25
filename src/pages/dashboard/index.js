import { Container, Grid, Typography } from "@mui/material";
import UserList from "../../components/user-list";
import MentorRequests from "../../components/mentor-requests";
import MentorApplications from "../../components/mentor-applications";

const Profile = () => {
  const mentees = [
    {
      firstName: 'Peter',
      lastName: 'Griffin',
      email: 'peter@phoenix.edu',
      skill: 'ReactJS',
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson',
      email: 'bart@phoenix.edu',
      skill: 'Graffiti',
    },
  ];

  const mentors = [
    // {
    //   firstName: 'Bart',
    //   lastName: 'Simpson',
    //   email: 'bart@phoenix.edu',
    //   skill: 'Badass',
    // },
  ];

  const requests = [
    {
      id: '1234',
      user:     {
        firstName: 'John',
        lastName: 'Cena',
        email: 'cena@phoenix.edu',
        skill: 'Wrestling',
      },
    },
    {
      id: '1235',
      user:     {
        firstName: 'John',
        lastName: 'McClane',
        email: 'mcclane@phoenix.edu',
        skill: 'Explosives',
      },
    }
  ];

  const applications = [
    {
      id: '1234',
      user:     {
        firstName: 'John',
        lastName: 'Cena',
        email: 'cena@phoenix.edu',
        skill: 'Acting',
      },
    },
  ];

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Dashboard</Typography>
      <Grid container spacing={2} direction="column">
        <Grid item><UserList title="Mentees" users={mentees} /></Grid>
        <Grid item><UserList title="Mentors" users={mentors} /></Grid>
        <Grid item><MentorRequests requests={requests} /></Grid>
        <Grid item><MentorApplications applications={applications} /></Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
