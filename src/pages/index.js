import { Grid, Paper } from '@mui/material';
import Login from '../components/login';
import {API, graphqlOperation} from '../graphql/client';
import {listUsers} from '../graphql/queries';

const Home = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/images/learning.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Login />
      </Grid>
    </Grid>
  );
};

Home.hideHeader = true;

export const getServerSideProps = async () => { 
  try {
  const data = await API.graphql(graphqlOperation(listUsers));
  console.log(data?.data?.listUsers?.items);
  } catch (error) {
    console.log(error);
  }  

  return {
    props: {}
  }
}


export default Home;
