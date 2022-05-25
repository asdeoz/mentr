import { Grid, Paper } from '@mui/material';
import Login from '../components/login';

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

export default Home;
